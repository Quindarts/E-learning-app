import AccordionGroupPaper from '@/components/ui/GroupAccordion';
import React from 'react';
import { View } from 'react-native';

function TabLesson({ course }: { course: any }) {
  // console.log('🚀 ~ TabLesson ~ course: ', course);
  const data = [
    {
      id: '1',
      name: 'Lesson 1 : What is UX/UI design?',
      details: [
        { id: '1-1', icon: 'star', content: 'Item 1' },
        { id: '1-2', icon: 'favorite', content: 'Item 2' },
      ],
    },
    {
      id: '2',
      name: 'Lesson 2 : App Design Process ',
      details: [
        { id: '2-1', icon: 'face', content: 'Item 3' },
        { id: '2-2', icon: 'home', content: 'Item 4' },
      ],
    },
    {
      id: '3',
      name: 'Lesson 3 : App Design Process',
      details: [
        { id: '2-1', icon: 'face', content: 'Item 3' },
        { id: '2-2', icon: 'home', content: 'Item 4' },
      ],
    },
    {
      id: '4',
      name: 'Lesson 4 : App Design Process',
      details: [
        // content, duration (icon block), video (icon youtube), tiền xử lí data để render
        { id: '2-1', icon: 'face', content: 'Item 3' },
        { id: '2-2', icon: 'home', content: 'Item 4' },
      ],
    },
  ];

  return (
    <View
      style={{
        backgroundColor: 'white',
        minHeight: '100%',
        flex: 1,
        padding: 8,
      }}
    >
      <AccordionGroupPaper list={data} />
    </View>
  );
}

export default TabLesson;
