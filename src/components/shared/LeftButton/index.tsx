import IconButtonPaper from '@/components/ui/IconButton';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import React from 'react';

function LeftButtonRouting({ backPath, icon }: any) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <IconButtonPaper
      icon={icon}
      variant='md'
      background={'rgba(0,0,0,0)'}
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
      }}
      iconColor='default'
      onPress={() => {
        navigation.navigate(`${backPath}`);
      }}
    />
  );
}

export default LeftButtonRouting;
