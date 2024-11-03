import RootLayout from '@/layout/RootLayout';
import Overview from './Overview';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import BillingDetail from './BillingDetail';
import useUserStore from '@/store/auth/useUserStore';
import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useCallback, useEffect, useState } from 'react';
import { useCourse } from '@/hook/useCourse';
import useCart from '@/hook/useCart';

export default function DetailScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const carts = useUserStore((s) => s.carts);
  const user = useUserStore((s) => s.user);
  const { course, fetchCourseById, loading, error } = useCourse();
  const [selectedCoupon, setSelectedCoupon] = useState<any>(user.coupons?.[0] ?? null); // obejct coupon
  const [finalPrice, setFinalPrice] = useState<number>(course?.price || 0);

  const { clearCart } = useCart();

  // handle clear cart when user leave this screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      clearCart();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const fetchCourse = async () => {
      if (carts && carts.items && carts.items.length > 0) {
        const courseId = carts.items[0].course._id as any; // lỗi type khó chịu
        await fetchCourseById(courseId);
      }
    };
    fetchCourse();
  }, []);

  useEffect(() => {
    if (course) {
      const discount = selectedCoupon ? selectedCoupon.discount : 0;
      const priceAfterDiscount = course.price * (1 - discount / 100) * 22700;
      setFinalPrice(priceAfterDiscount);
    }
  }, [course, selectedCoupon]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  if (!carts || !carts.items || carts.items.length === 0) {
    return <Text>No items in the cart</Text>;
  }

  return (
    <RootLayout>
      {course && (
        <Overview course={course} finalPrice={finalPrice} selectedCoupon={selectedCoupon} />
      )}
      <BillingDetail
        addressDetail={{
          country: user.addresses?.[0]?.province ?? '',
          phone: user.phone,
          email: user.email,
          fullName: `${user.firstName} ${user.lastName}`,
        }}
        coupon={user.coupons}
        selectedCoupon={selectedCoupon}
        setSelectedCoupon={setSelectedCoupon}
      />
    </RootLayout>
  );
}
