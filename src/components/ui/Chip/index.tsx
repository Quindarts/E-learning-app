import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Image, View } from 'react-native';
import { Chip, ChipProps, Text } from 'react-native-paper';
enum SIZE {
  SMALL = 'sm',
  LARGE = 'md',
  MEDIUM = 'lg',
  XL = 'xl',
}

interface ChipPropsType extends ChipProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: any;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconImage?: any;
}
const roundedStyle = (text: string) => {
  let value = 4;
  switch (text) {
    case SIZE.SMALL:
      value = 4;
      break;
    case SIZE.MEDIUM:
      value = 12;
      break;
    case SIZE.LARGE:
      value = 22.68;
      break;
    case SIZE.XL:
      value = 30;
      break;
  }
  return value;
};

const sizeStyle = (text: string) => {
  let value = {
    paddingVertical: 8,
    paddingHorizontal: 14,
  };
  switch (text) {
    case SIZE.SMALL:
      value = {
        paddingVertical: 0,
        paddingHorizontal: 0,
      };
      break;
    case SIZE.MEDIUM:
      value = {
        paddingVertical: 8,
        paddingHorizontal: 14,
      };
      break;
    case SIZE.LARGE:
      value = {
        paddingVertical: 16,
        paddingHorizontal: 56,
      };
      break;

    case SIZE.XL:
      value = {
        paddingVertical: 14,
        paddingHorizontal: 60,
      };
      break;
  }
  return value;
};

const ChipPaper: React.FC<ChipPropsType> = (props) => {
  const { children, bgColor, borderColor, iconImage, textColor, icon, ...rest } = props;

  return (
    <Chip
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        margin: 0,
        padding: 0,
      }}
      textStyle={{
        color: textColor,
        width: '100%',
        alignItems: 'center',
        margin: 0,
        height: 30,
      }}
      {...rest}
    >
      <View
        style={{
          width: 50,
          flexDirection: 'column',
          marginTop: 10,
        }}
      >
        {iconImage ? (
          <Image
            source={require('../../../../assets/google.png')}
            style={{ width: 24, height: 24, marginHorizontal: 'auto' }}
          />
        ) : (
          <MaterialIcons style={{ color: textColor, textAlign: 'center' }} name={icon} size={24} />
        )}
      </View>
      <Text
        style={{
          color: textColor,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '600',
        }}
        variant='bodyLarge'
      >
        {`${children}`}
      </Text>
    </Chip>
  );
};

export default ChipPaper;
