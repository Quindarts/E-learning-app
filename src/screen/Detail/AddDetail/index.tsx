import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Text, TextInput } from 'react-native-paper';
import PurchaseDetail from '../PurchaseDetail';
const MoMo: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [password, setPassword] = useState('');
  const CV_MASK = [/\d/, /\d/, /\d/];
  const EXPIRATION_DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/];

  return (
    <View>
      <TextInput
        value={cardNumber}
        onChangeText={setCardNumber}
        label='Card Number'
        mode='outlined'
        style={{ marginBottom: 8, backgroundColor: '#F4F9FF' }}
        keyboardType='numeric'
        render={(props) => <MaskInput {...props} mask={Masks.CREDIT_CARD} maxLength={20} />}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TextInput
          value={expirationDate}
          onChangeText={setExpirationDate}
          label='Expiration Date'
          mode='outlined'
          keyboardType='numeric'
          style={{ marginBottom: 8, backgroundColor: '#F4F9FF', flex: 1 }}
          render={(props) => <MaskInput {...props} mask={EXPIRATION_DATE_MASK} maxLength={5} />}
        />
        <TextInput
          value={cvv}
          onChangeText={setCvv}
          label='CVV'
          mode='outlined'
          keyboardType='numeric'
          style={{ marginBottom: 8, backgroundColor: '#F4F9FF', flex: 1 }}
          render={(props) => <MaskInput {...props} mask={CV_MASK} maxLength={3} />}
        />
      </View>
      <TextInput
        value={password}
        onChangeText={setPassword}
        label='Password'
        mode='outlined'
        style={{ marginBottom: 8, backgroundColor: '#F4F9FF' }}
        secureTextEntry
      />
    </View>
  );
};
export default function PaymentMethod() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('MoMo');
  const [isMoMo, setIsMoMo] = useState(true);
  const [isVnpay, setIsVnpay] = useState(false);

  const handleSelectPaymentMethod = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
    setIsMoMo(false);
    setIsVnpay(false);

    if (paymentMethod === 'MoMo') {
      setIsMoMo(true);
    } else if (paymentMethod === 'VNPay') {
      setIsVnpay(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.paymentMethod}>
        <Text variant='titleLarge' style={{ fontWeight: 'bold', marginVertical: 34 }}>
          Payment Method
        </Text>
        <View style={styles.paymentMethodList}>
          <TouchableOpacity
            style={styles.paymentMethodItem}
            onPress={() => handleSelectPaymentMethod('MoMo')}
          >
            <Image
              source={require('../../../../assets/MoMo_Logo.png')}
              style={styles.paymentMethodIcon}
            />
            <Text style={styles.paymentMethodText}>MoMo</Text>
            {isMoMo && (
              <AntDesign
                name='checkcircle'
                size={24}
                color={theme.colors.primary}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethodItem}
            onPress={() => handleSelectPaymentMethod('VNPay')}
          >
            <Image
              source={require('../../../../assets/vnpay_logo.jpg')}
              style={styles.paymentMethodIcon}
            />
            <Text style={styles.paymentMethodText}>VNPay</Text>
            {isVnpay && (
              <AntDesign
                name='checkcircle'
                size={24}
                color={theme.colors.primary}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {isMoMo && <MoMo />}
      <PurchaseDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  paymentMethod: {
    marginBottom: 16,
  },
  paymentMethodList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  paymentMethodItem: {
    alignItems: 'center',
  },
  paymentMethodIcon: {
    width: 40,
    height: 40,
  },
  paymentMethodText: {
    fontSize: 14,
    lineHeight: 24,
    marginTop: 8,
  },
  checkIcon: {
    marginTop: 8,
  },
});
