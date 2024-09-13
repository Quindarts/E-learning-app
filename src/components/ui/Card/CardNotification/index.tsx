import theme from '@/theme';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Icon, IconButton, Text, Title } from 'react-native-paper';

interface NotificationCardProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  color?: 'success' | 'warning' | 'error';
  time?: string;
}

const colorMapping = (color: string | undefined) => {
  switch (color) {
    case 'success':
      return theme.colors.primary;
    case 'warning':
      return '#F4AD4B';
    case 'error':
      return '#ff0000';
    default:
      return theme.colors.primary;
  }
};
const CardNotification: React.FC<NotificationCardProps> = ({
  icon,
  title,
  message,
  color,
  time,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {}}>
      {/* <Card> */}
      <Card.Content
        style={{
          flexDirection: 'row',
          padding: 18,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#F4F9FF',
          borderRadius: 8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: colorMapping(color),
              borderRadius: 100,
              marginRight: 15,
              padding: 12,
            }}
          >
            <Icon color={'white'} source={icon} size={26} />
          </View>
          <View style={{}}>
            <Text variant='titleSmall' style={{ fontWeight: 700, marginBottom: 6 }}>
              {title}
            </Text>
            <Text>{message}</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 8, color: '#767676' }}>{time}</Text>
        </View>
      </Card.Content>
      {/* </Card> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    elevation: 2, // Tạo hiệu ứng đổ bóng nhẹ
  },
});

export default CardNotification;
