import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Button, Text, TextInput } from 'react-native-paper';
import PurchaseDetail from '../PurchaseDetail';
import BillingDetail from '../BillingDetail';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import TextInputPaper from '@/components/ui/TextInput';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { ROUTING } from '@/utils/constants';
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
  const navigation: NavigationProp<ParamListBase> = useNavigation();
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
          Payment
        </Text>

        <View>
          <Formik
            initialValues={{ fullName: '', email: '', phone: '', country: '' }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string().required(),
              email: Yup.string().email().required(),
              phone: Yup.string().required(),
              country: Yup.string().required(),
            })}
            onSubmit={(values) => {
              navigation.navigate(ROUTING.TRANSACTION_COMPLETED);
            }}
          >
            {({
              handleSubmit,
            }: FormikProps<{
              fullName: string;
              email: string;
              phone: string;
              country: string;
            }>) => (
              <View style={{ width: '100%' }}>
                <TextInputPaper
                  isRequired={true}
                  label='Full Name'
                  name='fullName'
                  placeholder='Full Name'
                  mode='outlined'
                  textColor='primary'
                />
                <TextInputPaper
                  isRequired={true}
                  label='Email Here'
                  name='email'
                  placeholder='Email'
                  mode='outlined'
                  textColor='primary'
                />
                <TextInputPaper
                  isRequired={true}
                  label='Phone number'
                  name='phone'
                  placeholder=''
                  mode='outlined'
                  textColor='primary'
                  inputMode='numeric'
                />
                <TextInputPaper
                  isRequired={true}
                  label='Country'
                  name='country'
                  placeholder=''
                  mode='outlined'
                  textColor='primary'
                />

                <View style={styles.paymentMethodList}>
                  <TouchableOpacity
                    style={styles.paymentMethodItem}
                    onPress={() => handleSelectPaymentMethod('MoMo')}
                  >
                    <View style={[styles.imageContainer, isMoMo && styles.selectedPaymentMethod]}>
                      <Image
                        source={require('../../../../assets/MoMo_Logo.png')}
                        style={styles.paymentMethodIcon}
                      />
                    </View>
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
                    <View
                      style={[styles.imageContainer, , isVnpay && styles.selectedPaymentMethod]}
                    >
                      <Image
                        source={require('../../../../assets/vnpay_logo.jpg')}
                        style={styles.paymentMethodIcon}
                      />
                    </View>
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
                {/* <ButtonPaper
              uppercase={true}
              mode='contained'
              size='lg'
              rounded='sm'
              onPress={() => handleSubmit()}
              style={{ width: '100%', marginTop: 20 }}
            >
              Sign Up
            </ButtonPaper> */}
                <Button
                  mode='contained'
                  uppercase
                  style={{ marginVertical: 20 }}
                  onPress={() => {
                    handleSubmit();
                  }}
                >
                  Started
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </View>

      {/* {isMoMo && <MoMo />} */}
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
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  paymentMethodItem: {
    alignItems: 'center',
  },
  selectedPaymentMethod: {
    borderColor: '#06D001',
    borderWidth: 1,
    // effect
    shadowColor: '#06D001',
    elevation: 3,
    // shadowOffset: { width: 0, height: 4 },
  },
  imageContainer: {
    padding: 4,
  },
  paymentMethodIcon: {
    width: 40,
    height: 40,
    padding: 8,
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