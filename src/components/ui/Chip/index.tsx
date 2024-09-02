import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
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
  icon: any;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
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
  const { children, bgColor, borderColor, textColor, icon, ...rest } = props;

  return (
    <Chip
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
      textStyle={{
        color: textColor,
        paddingHorizontal: 18,
        paddingVertical: 2,
      }}
      {...rest}
    >
      <FontAwesome6 name={icon} size={18} />
      <Text
        style={{
          color: textColor,
          marginLeft: 6,
        }}
        variant='bodyLarge'
      >
        {`${children}`}
      </Text>
    </Chip>
  );
};

export default ChipPaper;
