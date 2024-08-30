import React from 'react';
import { Button, ButtonProps, IconButton, Text } from 'react-native-paper';

enum SIZE {
  SMALL = 'sm',
  LARGE = 'md',
  MEDIUM = 'lg',
  XL = 'xl',
}

interface ButtonPropsType extends ButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  hasIcon?: boolean;
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

const ButtonPaper: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  const { children, rounded = 'sm', size = `sm`, ...rest } = props;
  return (
    <Button
      style={{
        borderRadius: roundedStyle(rounded),
      }}
      contentStyle={sizeStyle(size)}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonPaper;
