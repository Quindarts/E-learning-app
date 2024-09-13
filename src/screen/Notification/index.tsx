import CardNotification from '@/components/ui/Card/CardNotification';
import RootLayout from '@/layout/RootLayout';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
type NotificationProps = {
  icon: string;
  title: string;
  message: string;
  color: 'success' | 'warning' | 'error';
  time: string;
};
const NOTIFICATION_DATA: NotificationProps[] = [
  {
    icon: 'check',
    title: 'Transaction Completed',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'success',
    time: '2m ago',
  },
  {
    icon: 'thumb-up',
    title: 'Lesson Completed',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'warning',
    time: '2m ago',
  },
  {
    icon: 'file-document-outline',
    title: 'Due Date Is near',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'error',
    time: '2m ago',
  },
  {
    icon: 'check',
    title: 'Transaction Completed',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'success',
    time: '2m ago',
  },
  {
    icon: 'thumb-up',
    title: 'Lesson Completed',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'warning',
    time: '2m ago',
  },
  {
    icon: 'file-document-outline',
    title: 'Due Date Is near',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'error',
    time: '2m ago',
  },
  {
    icon: 'thumb-up',
    title: 'Lesson Completed',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'warning',
    time: '2m ago',
  },
  {
    icon: 'file-document-outline',
    title: 'Due Date Is near',
    message: 'Lorem Ipsum Dummy Text Here',
    color: 'error',
    time: '2m ago',
  },
];

export default function NotificationScreen() {
  return (
    <RootLayout>
      <View style={{ flex: 1, backgroundColor: '#fff', height: '100%' }}>
        {NOTIFICATION_DATA.map((item, index) => (
          <CardNotification
            key={index}
            icon={item.icon}
            title={item.title}
            message={item.message}
            color={item.color}
            time={item.time}
          />
        ))}
      </View>
    </RootLayout>
  );
}
