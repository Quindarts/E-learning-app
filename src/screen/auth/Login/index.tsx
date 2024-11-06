import ButtonPaper from '@/components/ui/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import TextInputPaper from '@/components/ui/TextInput';
import { useAuth } from '@/hook/useAuth';
import useUserStore from '@/store/auth/useUserStore';
import theme from '@/theme';
import { ROUTING } from '@/utils/constants';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Image, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';
import * as Yup from 'yup';
import Foundation from '@expo/vector-icons/Foundation';

interface FormValues {
  email: string;
  password: string;
}

function LoginScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  // zustand state
  const { handleLogin } = useAuth();
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 40.3,
        }}
      >
        Sign In
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 20.16,
          color: '#6C6C6C',
          width: 320,
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        Lorem ipsum dolor sit amet a aconsectetur
      </Text>
      <View
        style={{
          marginTop: 20,
          width: '100%',
        }}
      >
        <Formik
          initialValues={{ email: 'quang@gmail.com', password: '123456Aa@' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values) => {
            const { email, password } = values;
            await handleLogin({ email, password });
          }}
        >
          {({ handleSubmit }: FormikProps<FormValues>) => (
            <View style={{ width: '100%' }}>
              <TextInputPaper
                label='Email here'
                name='email'
                placeholder='Email'
                mode='outlined'
                textColor='primary'
              />
              <TextInputPaper
                label='Password'
                icon='eye'
                name='password'
                placeholder='Password'
                isSecure={true}
              />
              <Text
                style={{
                  textAlign: 'right',
                  marginTop: 4,
                  fontSize: 12,
                  color: '#6C6C6C',
                }}
                onPress={() => {
                  navigation.navigate(ROUTING.RESET_PASSWORD);
                }}
              >
                Forget password?
              </Text>
              <ButtonPaper
                size='lg'
                style={{ width: '100%', marginTop: 40 }}
                mode='contained'
                onPress={() => handleSubmit()}
              >
                SIGN IN
              </ButtonPaper>
            </View>
          )}
        </Formik>
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: 700,
            lineHeight: 16.38,
            color: '#000000',
            textAlign: 'center',
            marginVertical: 20,
            marginHorizontal: 10,
            borderBottomColor: '#e3e1e1',
            borderBottomWidth: 0.5,
            textAlignVertical: 'center',
          }}
        >
          Or Sign In With
        </Text>
        <View
          style={{
            gap: 10,
            paddingHorizontal: 20,
          }}
        >
<<<<<<< HEAD
          <ButtonPaper mode='outlined' onPress={() => {}}>
            <Foundation
              style={{ margin: 10 }}
              name='social-facebook'
              size={24}
              color='primary.main'
            />
            <Text> Sign Up with Facebook</Text>
          </ButtonPaper>

          <ButtonPaper mode='outlined' onPress={() => {}}>
            <AntDesign name='google' style={{ margin: 10 }} size={20} color='#333' />
            <Text> Sign Up with Google</Text>
          </ButtonPaper>
=======
          {/* <ChipPaper
            onPress={() => {}}
            bgColor='#1877F2'
            mode='outlined'
            icon='facebook'
            textColor='white'
          >
            Sign Up with Facebook
          </ChipPaper>
          <ChipPaper
            onPress={() => {}}
            mode='outlined'
            bgColor='#FFFFFF'
            iconImage='../../../../assets/google.png'
            textColor='#0000008A'
          >
            Sign Up with Google
          </ChipPaper> */}
          <Button
            mode='contained'
            onPress={() => {}}
            style={{ backgroundColor: '#1877F2', marginVertical: 8, borderRadius: 8 }}
            icon={() => <Icon source='facebook' size={20} />}
            labelStyle={{ color: 'white' }}
          >
            Sign Up with Facebook
          </Button>
          <Button
            mode='contained'
            onPress={() => {}}
            style={{
              backgroundColor: '#FFFFFF',
              marginVertical: 8,
              borderWidth: 0.5,
              borderColor: '#0000008A',
              borderRadius: 8,
            }}
            icon={() => (
              <Image
                source={require('../../../../assets/google.png')}
                style={{ width: 20, height: 20 }}
              />
            )}
            labelStyle={{ color: '#0000008A' }}
          >
            Sign Up with Google
          </Button>
>>>>>>> 0a5e285cc11f8424027d67b8e3a476c0fa9e00f2
          <Text
            style={{
              textAlign: 'center',
              marginTop: 4,
              fontSize: 12,
              color: '#6C6C6C',
            }}
          >
            Don't have An Account?
            <Text
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: theme.colors.primary,
                marginLeft: 10,
              }}
              onPress={() => {
                navigation.navigate(ROUTING.SIGN_UP);
              }}
            >
              Sign Up here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
