import ButtonPaper from '@/components/ui/Button';
import CourseCardPaper from '@/components/ui/Card/CardCourse';
import CardNotification from '@/components/ui/Card/CardNotification';
import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import ProjectCardPaper from '@/components/ui/Card/CardProject/Index';
import CardReview from '@/components/ui/Card/CardReview';
import IconButtonPaper from '@/components/ui/IconButton';
import SearchBarPaper from '@/components/ui/SearchBar';
import TextInputPaper from '@/components/ui/TextInput';
import RootLayout from '@/layout/RootLayout';
import { Formik, FormikProps, FormikValues, yupToFormErrors } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Card, HelperText, IconButton, Text, TextInput } from 'react-native-paper';
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
      {/* <Formik>

      </Formik> */}
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
            <TextInputPaper
              isRequired={true}
              label='Email'
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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <CardProjectPaper
          imageSource={{ uri: 'https://picsum.photos/700' }}
          title='Project Title'
          creater='Designer Name'
          initialRating={3}
          progress={50}
        />
        <CardProjectPaper
          imageSource={{ uri: 'https://picsum.photos/700' }}
          title='Project Title'
          creater='Designer Name'
          initialRating={3}
          progress={80}
        />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <CourseCardPaper
          imageSource={{ uri: 'https://picsum.photos/700' }}
          title='Course Title'
          creater='Designer Name'
          progress={50}
        />
        <CourseCardPaper
          imageSource={{ uri: 'https://picsum.photos/700' }}
          title='Course Title'
          creater='Designer Name'
          progress={50}
        />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <CardReview
          name='John Doe'
          reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          initialRating={5}
          imgURL={'account'}
        />
        <CardReview
          name='John Doe'
          reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          initialRating={5}
          imgURL={'account'}
        />
      </View>
      {/* <View>
        <CardNotification
          icon={'check'}
          title='Transaction Completed'
          message='Lorem Ipsum Dummy Text Here'
          color='success'
          time='2m ago'
        />
        <CardNotification
          icon={'thumb-up'}
          title='Lesson Completed'
          message='Lorem Ipsum Dummy Text Here'
          color='warning'
          time='2m ago'
        />
        <CardNotification
          icon={'file-document-outline'}
          title='Due Date Is near'
          message='Lorem Ipsum Dummy Text Here'
          color='error'
          time='2m ago'
        />
      </View> */}
      <SearchBarPaper value='' />
    </RootLayout>
  );
}

interface FormValues {
  email: string;
  password: string;
}

export default DetailsScreen;
