import ButtonPaper from '@/components/ui/Button';
import SearchBarPaper from '@/components/ui/SearchBar';
import RootLayout from '@/layout/RootLayout';
import theme from '@/theme';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
type MessageType = {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
  // số tin nhắn chưa đọc
  count: number;
};
const data: MessageType[] = [
  {
    id: '1',
    name: 'Ayesha',
    message: 'Hello, How are you?',
    time: '9:00 AM',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    count: 2,
  },
  {
    id: '2',
    name: 'Ayesha',
    message: 'Hello, How are you?',
    time: '9:00 AM',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    count: 2,
  },
  {
    id: '1',
    name: 'Ayesha',
    message: 'Hello, How are you?',
    time: '9:00 AM',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    count: 2,
  },
  {
    id: '2',
    name: 'Ayesha',
    message: 'Hello, How are you?',
    time: '9:00 AM',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    count: 2,
  },
];
const Message = ({ name, message, time, avatar, count }: MessageType) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <View style={{ width: 50, height: 50, borderRadius: 25, overflow: 'hidden' }}>
        <Image source={{ uri: avatar }} style={{ width: 50, height: 50 }} />
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }} variant='bodyLarge'>
          {name}
        </Text>
        <Text variant='labelSmall'>{message}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        {count > 0 && (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: theme.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white' }}>{count}</Text>
          </View>
        )}
        <Text style={{ fontWeight: 'bold' }}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function InBoxSreen() {
  return (
    <RootLayout>
      <SearchBarPaper value='' />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}
      >
        <ButtonPaper
          labelStyle={{ marginHorizontal: 0, marginVertical: 0, fontSize: 14, fontWeight: 'bold' }}
          onPress={() => {}}
          mode='contained'
          size='xl'
          rounded='xl'
        >
          Chat
        </ButtonPaper>
        <ButtonPaper
          labelStyle={{ marginHorizontal: 0, marginVertical: 0, fontSize: 14, fontWeight: 'bold' }}
          style={{ backgroundColor: '#F4F9FF', borderRadius: 30 }}
          onPress={() => {}}
          size='xl'
          rounded='xl'
        >
          Calls
        </ButtonPaper>
      </View>
      {data.map((item, index) => (
        <Message key={index} {...item} />
      ))}
    </RootLayout>
  );
}
