import RootLayout from '@/layout/RootLayout';
import React from 'react';
import { View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';

function DetailsScreen() {
  return (
    <RootLayout>
      {/* <View> */}
      {/* b - 1 */}
      <Button
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
      {/* b - 2 */}
      <Button
        mode='contained'
        // style={{ borderRadius: 5, paddingVertical: 16, paddingHorizontal: 56 }}
        style={{ borderRadius: 30 }}
        contentStyle={{ paddingVertical: 16, paddingHorizontal: 50 }}
        labelStyle={{ margin: 0 }}
        uppercase={true}
        // compact={true}
        onPress={() => {}}
        // compact={true}
      >
        Button sign in
      </Button>
      {/* b - 3 */}
      <Button
        mode='contained-tonal'
        style={{
          borderRadius: 40,
          // backgroundColor: 'F1F1F1',
          // backgroundColor: '#f1f1f1',
          // alignSelf: 'flex-start'
        }}
        labelStyle={{
          margin: 0,
          // color: 'black',
        }}
        contentStyle={{ minWidth: 0, padding: 14 }}
        uppercase={true}
        onPress={() => {}}
      >
        Button Skip
      </Button>
      {/* b - 4 */}
      <Button
        mode='outlined'
        style={{
          borderRadius: 100,
          // borderColor: '#dedede',
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
      {/* b - 5 */}
      <Button
        mode='contained'
        style={{ borderRadius: 22.68 }}
        contentStyle={{ paddingVertical: 14, paddingHorizontal: 60 }}
        labelStyle={{ margin: 0 }}
        onPress={() => {}}
      >
        Button Chat
      </Button>
      {/* b - 5 */}
      <Button
        mode='text'
        style={{ borderRadius: 22.68, backgroundColor: '#f4f9ff' }}
        contentStyle={{ paddingVertical: 14, paddingHorizontal: 60 }}
        labelStyle={{ margin: 0 }}
        onPress={() => {}}
      >
        Button Calls
      </Button>
      {/* i - 1 */}
      <IconButton
        mode='contained'
        icon='arrow-left'
        size={18}
        // containerColor='#f1f1f1'
        style={{ borderRadius: 5 }}
        onPress={() => {}}
      />
      {/* i - 2 */}
      <IconButton icon='arrow-left' size={14} onPress={() => {}} />
      {/* i - 3 */}
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
