import AvatarPaper from '@/components/ui/Avatar';
import RootLayout from '@/layout/RootLayout';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import theme from '@/theme';

type ItemData = {
  id: string;
  title: string;
  icon: string;
};

const items: ItemData[] = [
  {
    id: '1',
    title: 'Profile',
    icon: 'https://img.icons8.com/ios-filled/452/user',
  },
  {
    id: '2',
    title: 'Payment Option',
    icon: 'https://img.icons8.com/?size=100&id=78231&format=png&color=000000',
  },
  {
    id: '3',
    title: 'My Certificates',
    icon: 'https://img.icons8.com/ios-filled/452/certificate',
  },
  {
    id: '4',
    title: 'Terms & Conditions',
    icon: 'https://img.icons8.com/ios-filled/452/checked-2',
  },
  {
    id: '5',
    title: 'Help Center',
    icon: 'https://img.icons8.com/ios-filled/452/help',
  },
  {
    id: '6',
    title: 'Invite friends',
    icon: 'https://img.icons8.com/ios-filled/452/invite',
  },
  {
    id: '7',
    title: 'Logout',
    icon: 'https://img.icons8.com/ios-filled/452/logout-rounded-left',
  },
];
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  icon: string;
};
const styles = StyleSheet.create({
  item: {
    width: '100%',
    // padding: 20,
    marginVertical: 10,
    // marginHorizontal: 16,
    // borderRadius: 23,
  },
  //   title: {
  //     fontSize: 15,
  //   },
});

const Item = ({ item, onPress, backgroundColor, textColor, icon }: ItemProps) => (
  //   button has iconleft and arrow-right at the end
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* icon lef and text */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
        }}
      >
        <Icon source={{ uri: icon }} size={30} color={theme.colors.primary} />
        <Text variant='bodyLarge' style={{ color: textColor }}>
          {item.title}
        </Text>
      </View>
      {/* arrow right */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {/* <Image
          source={{ uri: 'https://img.icons8.com/ios/452/chevron-right.png' }}
          style={{ width: 24, height: 24 }}
        /> */}
        <AntDesign name='right' size={24} color='black' />
      </View>
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = 'transparent';
    const color = '#202244';
    return (
      <Item
        item={item}
        onPress={() => {}}
        backgroundColor={backgroundColor}
        textColor={color}
        icon={item.icon}
      />
    );
  };
  return (
    // <RootLayout>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      }}
    >
      {/* content */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
          paddingVertical: 110,
          borderRadius: 23,
          padding: 20,
          backgroundColor: '#F4F9FF',
          borderColor: '#DEDEDE',
          borderWidth: 1,
          width: '100%',
          position: 'relative',
        }}
      >
        {/* avatar */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            position: 'absolute',
            top: -70,
            zIndex: 1, // to be on top of the parent
          }}
        >
          <AvatarPaper
            variant={'lg'}
            href={{ uri: 'https://avatars.githubusercontent.com/u/47231147?v=4' }}
          />
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ width: '100%' }}
        />
      </View>
    </View>
    // </RootLayout>
  );
}
