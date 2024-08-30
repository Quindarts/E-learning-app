import ButtonPaper from '@/components/ui/Button';
import IconButtonPaper from '@/components/ui/IconButton';
import RootLayout from '@/layout/RootLayout';
import React from 'react';
import { View } from 'react-native';
<<<<<<< HEAD
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper';
=======
import { IconButton, Text } from 'react-native-paper';
>>>>>>> dev

function DetailsScreen() {
  return (
    <RootLayout>
      {/* <ButtonPaper onPress={() => {}} mode='contained' size='sm' rounded='sm'>
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
      </ButtonPaper> */}
      {/* <Button
        mode='contained'
        style={{ borderRadius: 30 }}
        contentStyle={{ paddingVertical: 16, paddingHorizontal: 56 }}
        labelStyle={{ margin: 0 }}
        uppercase={true}
        // compact={true}
        onPress={() => {}}
      >
        Button continue
      </Button>
      <Button
        mode='contained'
        style={{ borderRadius: 30 }}
        contentStyle={{ paddingVertical: 16, paddingHorizontal: 50 }}
        labelStyle={{ margin: 0 }}
        uppercase={true}
        onPress={() => {}}
      >
        Button sign in
      </Button>
      <Button
        mode='contained-tonal'
        style={{
          borderRadius: 40,
        }}
        labelStyle={{
          margin: 0,
        }}
        contentStyle={{ minWidth: 0, padding: 14 }}
        uppercase={true}
        onPress={() => {}}
      >
        Button Skip
      </Button>
      <Button
        mode='outlined'
        style={{
          borderRadius: 100,
        }}
        contentStyle={{
          paddingVertical: 8,
          paddingHorizontal: 14,
        }}
        labelStyle={{ margin: 0, color: 'black' }}
        onPress={() => {}}
      >
        Button tags
      </Button>
      <Button
        mode='contained'
        style={{ borderRadius: 22.68 }}
        contentStyle={{ paddingVertical: 14, paddingHorizontal: 60 }}
        labelStyle={{ margin: 0 }}
        onPress={() => {}}
      >
        Button Chat
      </Button>
      <Button
        mode='text'
        style={{ borderRadius: 22.68, backgroundColor: '#f4f9ff' }}
        contentStyle={{ paddingVertical: 14, paddingHorizontal: 60 }}
        labelStyle={{ margin: 0 }}
        onPress={() => {}}
      >
        Button Calls
      </Button>
      <IconButton
        mode='contained'
        icon='arrow-left'
        size={18}
        // containerColor='#f1f1f1'
        style={{ borderRadius: 5 }}
        onPress={() => {}}
      /> */}
      {/* <IconButtonPaper
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
      /> */}
      <TextInput
        mode='outlined'
        outlineStyle={{ borderRadius: 6 }}
        // dense={true}
        textColor='#858383'
      />
      <HelperText type='error' visible={true}>
        This field is required
      </HelperText>
      <TextInput
        mode='outlined'
        outlineStyle={{ borderRadius: 6 }}
        dense={true}
        textColor='#858383'
        secureTextEntry={true}
        right={<TextInput.Icon icon='eye' />}
      />
      {/* search with icon  */}
      <TextInput
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
      />
    </RootLayout>
  );
}

export default DetailsScreen;
