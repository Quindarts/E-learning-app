import RootLayout from '@/layout/RootLayout';
import theme from '@/theme';
import { ROUTING } from '@/utils/constants';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function TransactionCompletedScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <RootLayout>
      <View style={{ alignItems: 'center', flex: 1, gap: 20 }}>
        <AntDesign name='checkcircleo' size={60} color={theme.colors.primary} />
        <Text variant='titleLarge' style={{ fontWeight: 'bold' }}>
          Transaction Completed
        </Text>
        <Image
          source={require('../../../../assets/transaction_completed.png')}
          // resizeMode='cover'
          style={{
            width: '80%',
            height: 460,
            objectFit: 'contain',
          }}
        />
        <Button
          mode='contained'
          uppercase
          style={{ marginVertical: 20, width: '100%' }}
          onPress={() => {
            navigation.navigate(ROUTING.BOTTOM_TAB);
          }}
        >
          Go home
        </Button>
      </View>
    </RootLayout>
  );
}
