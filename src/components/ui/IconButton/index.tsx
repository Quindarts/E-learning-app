import { IconButton, IconButtonProps } from 'react-native-paper';

enum SIZE_ICON_BUTTON {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

interface IconButtonType extends IconButtonProps {
  variant?: 'sm' | 'md' | 'lg'; // size icon
  rounded?: 'sm' | 'md';
  iconColor?: 'sky' | 'gray' | 'stone' | 'cyan' | 'black' | 'default'; // default is white
  containerColor?: 'sky' | 'gray' | 'stone' | 'cyan' | 'black' | 'default';
}

const roundedStyle = (text: string) => {
  let value = 4;
  switch (text) {
    case SIZE_ICON_BUTTON.SMALL:
      value = 4;
      break;
    case SIZE_ICON_BUTTON.MEDIUM:
      value = 114;
      break;
  }
  return value;
};
const sizeStyle = (text: string) => {
  let value = 14;
  switch (text) {
    case SIZE_ICON_BUTTON.SMALL:
      value = 14;
      break;
    case SIZE_ICON_BUTTON.MEDIUM:
      value = 18;
      break;
    case SIZE_ICON_BUTTON.LARGE:
      value = 20;
      break;
  }
  return value;
};
const colorStyle = (text: string) => {
  let value = '#fff';
  switch (text) {
    case 'sky':
      value = '#0f3975';
      break;
    case 'gray':
      value = '#f1f1f1';
      break;
    case 'stone':
      value = '#7E7E7E';
      break;
    case 'cyan':
      value = '#bad5fc';
      break;
    case 'black':
      value = '#000';
      break;
    case 'default':
      value = '#fff';
      break;
  }
  return value;
};

export default function IconButtonPaper(props: IconButtonType) {
  const {
    rounded = 'sm',
    variant = 'sm',
    iconColor = 'default',
    containerColor = 'default',
    ...rest
  } = props;
  return (
    <IconButton
      size={sizeStyle(variant)}
      style={{ borderRadius: roundedStyle(rounded) }}
      iconColor={colorStyle(iconColor)}
      containerColor={colorStyle(containerColor)}
      {...rest}
    />
  );
}
