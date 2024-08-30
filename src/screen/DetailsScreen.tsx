import ButtonPaper from '@/components/ui/Button';
import RootLayout from '@/layout/RootLayout';
import React from 'react';
import { View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';

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
      <ButtonPaper onPress={() => {}} mode='text' size='xl' rounded='xl'>
        Button calls
      </ButtonPaper>
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
      <IconButton icon='arrow-left' size={14} onPress={() => {}} />
      <IconButton
        icon='magnify'
        // mode='contained'
        size={20}
        iconColor='#fff'
        containerColor='#0f3975'
        style={{ borderRadius: 114, margin: 0 }}
        onPress={() => {}}
      />
      {/* i - 1 */}
      <IconButton
        icon='cog'
        size={18}
        iconColor='#0f3975'
        containerColor='#bad5fc'
        style={{ borderRadius: 5 }}
        onPress={() => {}}
      />
      {/* i - 1 */}
      <IconButton
        icon='bell'
        size={18}
        iconColor='#0f3975'
        containerColor='#f1f1f1'
        style={{ borderRadius: 5 }}
        onPress={() => {}}
      />
      {/* </View> */}
    </RootLayout>
  );
}

export default DetailsScreen;
