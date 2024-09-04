import ButtonPaper from '@/components/ui/Button';
import ChipPaper from '@/components/ui/Chip';
import IconButtonPaper from '@/components/ui/IconButton';
import TextInputPaper from '@/components/ui/TextInput';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';
export default function SignUp() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
      }}
    >
      {/* <IconButtonPaper
        icon={'arrow-left'}
        variant='lg'
        // rounded='sm'
        iconColor='black'
        containerColor='gray'
        style={{ position: 'absolute', top: 20, left: 20 }}
        onPress={() => navigation.goBack()}
      /> */}
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
        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleSubmit,
        }: FormikProps<{
          fullName: string;
          email: string;
          password: string;
          confirmPassword: string;
        }>) => (
          <View style={{ width: '100%' }}>
            <TextInputPaper
              isRequired={true}
              label='Full Name'
              name='fullName'
              placeholder='Full Name'
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
        <Text style={{ textAlign: 'center' }}>
          Already Have An Account?
          <Text
            style={{ color: '#0f3975', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('Login')}
          >
            {' '}
            Sign In?
          </Text>
        </Text>
      </View>
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
    </View>
  );
}
