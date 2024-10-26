import RootLayout from '@/layout/RootLayout';
import Overview from './Overview';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import BillingDetail from './BillingDetail';

export default function DetailScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <RootLayout>
      <Overview />
      <BillingDetail />
    </RootLayout>
  );
}
