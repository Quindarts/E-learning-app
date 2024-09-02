import ButtonPaper from '@/components/ui/Button';
import IconButtonPaper from '@/components/ui/IconButton';
import TextInputPaper from '@/components/ui/TextInput';
import RootLayout from '@/layout/RootLayout';
import { Formik, FormikProps, FormikValues, yupToFormErrors } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper';
import * as Yup from 'yup';

function DetailsScreen() {
  return (
    <RootLayout>
      <ButtonPaper onPress={() => {}} mode='contained' size='sm' rounded='sm'>
        Hello
      </ButtonPaper>

      <ButtonPaper onPress={() => {}} uppercase={true} mode='contained' size='lg' rounded='xl'>
        Button sign in
      </ButtonPaper>
      <ButtonPaper
        onPress={() => {}}
        uppercase={true}
        mode='contained-tonal'
        size='sm'
        rounded='xl'
      >
        Button Skip
      </ButtonPaper>
      <ButtonPaper onPress={() => {}} mode='outlined' size='sm' rounded='xl'>
        Button tags
      </ButtonPaper>
      <ButtonPaper
        labelStyle={{ margin: 0 }}
        onPress={() => {}}
        mode='contained'
        size='xl'
        rounded='xl'
      >
        Button chat
      </ButtonPaper>
      <ButtonPaper labelStyle={{ margin: 0 }} onPress={() => {}} mode='text' size='xl' rounded='xl'>
        Button calls
      </ButtonPaper>

      <IconButtonPaper
        icon={'arrow-left'}
        variant='sm'
        rounded='sm'
        iconColor='black'
        containerColor='gray'
        onPress={() => {}}
      />
      <IconButtonPaper
        icon={'arrow-left'}
        iconColor='black'
        containerColor='default'
        variant='sm'
        onPress={() => {}}
      />
      <IconButtonPaper
        icon={'magnify'}
        variant='lg'
        rounded='md'
        iconColor='default'
        containerColor='sky'
        onPress={() => {}}
      />

      <IconButtonPaper
        icon='cog'
        variant='md'
        iconColor='sky'
        containerColor='cyan'
        rounded='sm'
        onPress={() => {}}
      />

      <IconButtonPaper
        icon='bell'
        variant='md'
        iconColor='sky'
        containerColor='gray'
        onPress={() => {}}
      />

      <IconButtonPaper
        icon={'pencil'}
        variant='lg'
        rounded='md'
        iconColor='default'
        containerColor='stone'
        onPress={() => {}}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }: FormikProps<FormValues>) => (
          <View>
            <TextInputPaper name='email' placeholder='Email' mode='outlined' textColor='primary' />
            <TextInputPaper
              name='password'
              placeholder='Password'
              mode='outlined'
              textColor='primary'
              isSecure={true}
              icon='eye'
            />
            <Button onPress={() => handleSubmit()}>Submit</Button>
          </View>
        )}
      </Formik>

      {/* search with icon  */}
      {/* <TextInput
        label='Search'
        outlineStyle={{ borderRadius: 100 }}
        mode='outlined'
        left={
          <TextInput.Icon
            icon={require('@/picture/iconamoon--search-light.png')}
            // icon={{ uri: ''}}
            color={'#fff'}
            size={18}
            style={{ backgroundColor: '#0f3975' }}
          />
        }
      /> */}
    </RootLayout>
  );
}

interface FormValues {
  email: string;
  password: string;
}

export default DetailsScreen;
