import AccordionPaper from '@/components/ui/Accordion';
import AvatarPaper from '@/components/ui/Avatar';
import ChipPaper from '@/components/ui/Chip';
import GroupAccordion from '@/components/ui/GroupAccordion';
import RootLayout from '@/layout/RootLayout';
import theme from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Button, List, Text } from 'react-native-paper';

function Home() {
  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(true);
  const [expanded3, setExpanded3] = React.useState(true);
  const handlePressLesson1 = () => setExpanded1(!expanded1);
  const handlePressLesson2 = () => setExpanded2(!expanded2);
  const handlePressLesson3 = () => setExpanded3(!expanded3);
  const list = [
    {
      name: 'Lesson 1 : What is UX/UI design?',
      details: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'play-circle-filled',
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'article',
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'play-circle-filled',
        },
      ],
    },
  ];
  const list2 = [
    {
      name: 'Lesson 2 : App Design Process',
      details: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'play-circle-filled',
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'article',
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'play-circle-filled',
        },
      ],
    },
  ];
  const list3 = [
    {
      name: 'Lesson 3 : App Design Process',
      details: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'play-circle-filled',
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'article',
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'play-circle-filled',
        },
      ],
    },
  ];
  return (
    <RootLayout>
      <Text variant='bodyLarge'>Component page</Text>
      <Text variant='bodyLarge'>primary button</Text>
      <Text variant='bodyLarge'>default text Lorem ipsum dolor sit</Text>
      <MaterialIcons name='home' size={24} color='black' />
      <Text variant='bodyLarge'>bodyLarge text</Text>
      <Text variant='bodyMedium'>bodyMedium text</Text>
      <Text variant='bodySmall'>bodySmall text</Text>
      <Text variant='titleSmall'>titleSmall text</Text>
      <Text variant='titleMedium'>titleMedium text</Text>
      <Text variant='titleLarge'>titleLarge text</Text>
      <Text variant='titleLarge'>Chip</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <ChipPaper
          onPress={() => {}}
          mode='outlined'
          bgColor='#FFFFFF'
          icon='flat-color-icons:google'
          textColor='#0000008A'
        >
          Sign Up with Google{' '}
        </ChipPaper>
        <ChipPaper
          onPress={() => {}}
          bgColor='#1877F2'
          mode='outlined'
          icon='formkit:facebook'
          textColor='white'
        >
          Sign Up with Facebook{' '}
        </ChipPaper>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <AvatarPaper variant='sm' href={'account'} />
        <AvatarPaper variant='md' href={'account'} />
        <AvatarPaper variant='lg' href={'account'} />
      </View>
      <AccordionPaper expanded={expanded1} handleExpanded={handlePressLesson1} list={list} />
      {/* <AccordionPaper expanded={expanded2} handleExpanded={handlePressLesson2} list={list2} /> */}
      {/* <AccordionPaper expanded={expanded3} handleExpanded={handlePressLesson3} list={list3} /> */}
      {/* <GroupAccordion /> */}
    </RootLayout>
  );
}

export default Home;
