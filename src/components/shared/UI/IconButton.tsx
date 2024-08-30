import { Button, IconButton } from 'react-native-paper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  onPress?: () => void;
}
