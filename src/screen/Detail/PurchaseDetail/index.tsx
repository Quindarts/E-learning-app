import theme from '@/theme';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
const PurchaseDetailData = {
  price: 95,
  date: '16-09-2024',
  coupon: 0.2,
};
export default function PurchaseDetail() {
  return (
    <View>
      <View
        style={{
          marginVertical: 34,
          borderRadius: 18,
          borderColor: '#DEDEDE',
          borderWidth: 1,
          flexDirection: 'row',
          paddingVertical: 20,
          flexWrap: 'wrap',
          paddingHorizontal: 26,
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <Text
          variant='labelLarge'
          style={{
            position: 'absolute',
            top: -12,
            left: 20,
            backgroundColor: '#FFFFFF',
          }}
        >
          Purchase Detail:
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, flexBasis: '40%' }}>
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            Date:
          </Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
            {PurchaseDetailData.date}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, flexBasis: '40%' }}>
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            Price:
          </Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
            ${PurchaseDetailData.price}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20 }}>
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            Coupon:
          </Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
            Added {PurchaseDetailData.coupon * 100}% discount
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        <Text variant='titleMedium'>Final Price: </Text>
        <Text variant='titleMedium' style={{ fontWeight: 'bold', color: theme.colors.primary }}>
          ${PurchaseDetailData.price - PurchaseDetailData.price * PurchaseDetailData.coupon}
        </Text>
      </View>
    </View>
  );
}
