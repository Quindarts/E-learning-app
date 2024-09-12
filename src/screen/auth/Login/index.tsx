import ButtonPaper from '@/components/ui/Button';
import ChipPaper from '@/components/ui/Chip';
import TextInputPaper from '@/components/ui/TextInput';
import { useAuth } from '@/hook/useAuth';
import authService from '@/services/authService';
import useUserStore from '@/store/auth/useUserStore';
import theme from '@/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

function LoginScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  // zustand state
  const user = useUserStore((state) => state.user);
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
          initialValues={{ email: 'eve.holt@reqres.in', password: 'cityslicka' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values) => {
            const { email, password } = values;
            const response: any = await handleLogin({ email, password });
            if (response.token) {
              navigation.navigate('BottomTab');
            }
            // update state
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
                  navigation.navigate('ResetPassword');
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
          <ChipPaper
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
          </ChipPaper>
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
                navigation.navigate('SignUp');
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
