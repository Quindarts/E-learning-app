import { Button, IconButton } from 'react-native-paper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isButton?: boolean;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  onPress?: () => void;
}

// export default function CustomButton({ children, isButton, size, ...rest }: ButtonProps) {
//   return isButton ? (
//     <IconButton icon={children} {...rest} />
//   ) : (
//     <Button {...rest}>{children}</Button>
//   );
// }
