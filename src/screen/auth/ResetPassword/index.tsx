import ButtonPaper from '@/components/ui/Button';
import IconButtonPaper from '@/components/ui/IconButton';
import TextInputPaper from '@/components/ui/TextInput';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import { Text, View } from 'react-native';
import * as Yup from 'yup';

export default function ResetPassword() {
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
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
          }}
        >
          Reset Password
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
              style={{ width: '100%', marginTop: 40 }}
            >
              submit
            </ButtonPaper>
          </View>
        )}
      </Formik>
    </View>
  );
}
