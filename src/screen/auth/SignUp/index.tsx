import ButtonPaper from '@/components/ui/Button';
import ChipPaper from '@/components/ui/Chip';
import IconButtonPaper from '@/components/ui/IconButton';
import TextInputPaper from '@/components/ui/TextInput';
import { useAuth } from '@/hook/useAuth';
import { ROUTING } from '@/utils/constants';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { Button, Icon } from 'react-native-paper';
import * as Yup from 'yup';
export default function SignUp() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const { handleRegister } = useAuth();

  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: 'white',
      }}
    >
      {/* Chả hiểu sao mà dùng postion thì không bo góc được mà phải style */}
      <IconButtonPaper
        icon={'arrow-left'}
        variant='lg'
        // rounded='sm'
        iconColor='black'
        containerColor='gray'
        style={{ position: 'absolute', top: 30, left: 10, overflow: 'hidden', borderRadius: 5 }}
        onPress={() => navigation.goBack()}
      />
      {/* Title  */}
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
          }}
        >
          Sign Up
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#6C6C6C',
            textAlign: 'center',
            // marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </View>
      {/* form */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
        })}
        onSubmit={async (values) => {
          const { firstName, lastName, email, password } = values;
          const response: any = await handleRegister({ firstName, lastName, email, password });
          console.log('sigunup: ', response);
          if (response.status === 409) {
            alert(response.message);
          }
        }}
      >
        {({
          handleSubmit,
        }: FormikProps<{
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          confirmPassword: string;
        }>) => (
          <View style={{ width: '100%' }}>
            <TextInputPaper
              isRequired={true}
              label='First Name'
              name='firstName'
              placeholder='First Name'
              mode='outlined'
              textColor='primary'
            />
            <TextInputPaper
              isRequired={true}
              label='Last Name'
              name='lastName'
              placeholder='Last Name'
              mode='outlined'
              textColor='primary'
            />
            <TextInputPaper
              isRequired={true}
              label='Email Here'
              name='email'
              placeholder='Email'
              mode='outlined'
              textColor='primary'
            />
            <TextInputPaper
              label='Password'
              name='password'
              placeholder='Password'
              mode='outlined'
              textColor='primary'
              isSecure={true}
              icon='eye'
              isRequired={true}
            />
            <TextInputPaper
              label='Confirm Password'
              name='confirmPassword'
              placeholder='Confirm Password'
              mode='outlined'
              textColor='primary'
              isSecure={true}
              icon='eye'
            />
            <ButtonPaper
              uppercase={true}
              mode='contained'
              size='lg'
              rounded='sm'
              onPress={() => handleSubmit()}
              style={{ width: '100%', marginTop: 20 }}
            >
              Sign Up
            </ButtonPaper>
          </View>
        )}
      </Formik>
      {/* drawer line */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray', marginHorizontal: 10 }} />
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Or Sign Up With</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray', marginHorizontal: 10 }} />
      </View>
      {/* chip */}
      <View style={{ marginTop: 15, paddingHorizontal: 15, gap: 10 }}>
        <Button
          mode='contained'
          onPress={() => {}}
          style={{ backgroundColor: '#1877F2', marginVertical: 8, borderRadius: 8 }}
          icon={() => <Icon source='facebook' color='white' size={24} />}
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
        {/* <Text style={{ textAlign: 'center' }}>
          Already Have An Account?
          <Text
            style={{ color: '#0f3975', fontWeight: 'bold' }}
            onPress={() => navigation.navigate(ROUTING.LOGIN)}
          >
            {' '}
            Sign In?
          </Text>
        </Text> */}
      </View>
    </ScrollView>
  );
}
