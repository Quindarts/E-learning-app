import RootLayout from '@/layout/RootLayout';
import Overview from './Overview';
import PaymentMethod from './AddDetail';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { ROUTING } from '@/utils/constants';

export default function DetailScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <RootLayout>
      <Overview />
      <PaymentMethod />
    </RootLayout>
  );
}
