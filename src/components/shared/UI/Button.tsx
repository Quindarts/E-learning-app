import { Button } from 'react-native-paper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mode?: 'sign-in' | 'continue' | 'skip' | 'arrow';
  onPress?: () => void;
}

export default function MyButton({ children, onPress, ...props }: ButtonProps) {
  return <Button mode='contained'>{children}</Button>;
}
