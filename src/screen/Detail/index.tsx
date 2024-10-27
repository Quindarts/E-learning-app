import RootLayout from '@/layout/RootLayout';
import Overview from './Overview';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import BillingDetail from './BillingDetail';

export default function DetailScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { course } = route.params as any;
  console.log('🚀 ~ file: index.tsx ~ line 6 ~ DetailScreen ~ course', course);
  return (
    <RootLayout>
      <Overview course={course} />
      <BillingDetail />
    </RootLayout>
  );
}
