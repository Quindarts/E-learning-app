import { Asset } from 'expo-asset';
import React from 'react';
import { Avatar, AvatarImageProps } from 'react-native-paper';

interface AvatarPropsType extends AvatarImageProps {
  variant: 'sm' | 'md' | 'lg';
  href: string;
}
enum SIZE {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}
const sizeStyle = (text: string): number => {
  let size = 47.82;
  switch (text) {
    case SIZE.SMALL:
      size = 47.82;
      break;
    case SIZE.MEDIUM:
      size = 51.88;
      break;
    case SIZE.LARGE:
      size = 108;
      break;
  }
  return size;
};
function AvatarPaper(props: Pick<AvatarPropsType, 'href' | 'variant'>) {
  const { href, variant = 'sm', ...rest } = props;
  return <Avatar.Icon size={sizeStyle(variant)} icon={href} {...rest} />;
}
export default AvatarPaper;
