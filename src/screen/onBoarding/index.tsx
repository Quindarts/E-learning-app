import ButtonPaper from '@/components/ui/Button';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

function OnBoardingScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#fffff',
        marginVertical: 100,
      }}
    >
      <Image
        source={require('../../../assets/onboard-img.png')}
        style={{ width: 271.87, height: 350.59, marginHorizontal: 'auto', marginTop: 20 }}
      />
      <Text
        style={{
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 40.35,
          fontSize: 32,
          marginTop: 20,
        }}
        variant='displaySmall'
      >
        Join Edu Hub To KickStart Your Lesson
      </Text>
      <Text
        style={{ fontWeight: 400, width: 400, textAlign: 'center', color: '#6C6C6C', fontSize: 14 }}
        variant='titleLarge'
      >
        Lorem ipsum dolor sit amet a aconsectetur. Ut proin accumsan be{' '}
      </Text>
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          gap: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ButtonPaper
          mode='contained'
          onPress={() => navigation.navigate('Login')}
          style={{ width: 160 }}
          size='lg'
          rounded='sm'
        >
          SIGN IN
        </ButtonPaper>
        <ButtonPaper
          style={{ width: 160 }}
          onPress={() => navigation.navigate('SignUp')}
          size='lg'
          mode='outlined'
        >
          SIGN UP
        </ButtonPaper>
      </View>
    </View>
  );
}

export default OnBoardingScreen;
