import ButtonPaper from '@/components/ui/Button';
import TextInputPaper from '@/components/ui/TextInput';
import { Formik, FormikProps } from 'formik';
import { View } from 'react-native';
import * as Yup from 'yup';

export default function BillingDetail() {
  return (
    <View>
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
              isRequired={true}
              label='Phone number'
              name='phone'
              placeholder=''
              mode='outlined'
              textColor='primary'
              inputMode='numeric'
            />
            {/* <ButtonPaper
              uppercase={true}
              mode='contained'
              size='lg'
              rounded='sm'
              onPress={() => handleSubmit()}
              style={{ width: '100%', marginTop: 20 }}
            >
              Sign Up
            </ButtonPaper> */}
          </View>
        )}
      </Formik>
    </View>
  );
}
