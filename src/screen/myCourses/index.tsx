import CourseCardPaper from '@/components/ui/Card/CardCourse';
import RootLayout from '@/layout/RootLayout';
import { FlatList, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
type coursesData = {
  id: string;
  title: string;
  progress: number; // 0 - 100
  author: string;
  img: string;
};
const courses: coursesData[] = [
  {
    id: '1',
    title: 'React Native',
    progress: 30,
    author: 'Facebook',
    img: 'https://reactnative.dev/img/tiny_logo.png', // Đổi sang .png
  },
  {
    id: '2',
    title: 'React',
    progress: 70,
    author: 'Facebook',
    img: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '3',
    title: 'JavaScript',
    progress: 100,
    author: 'Netscape',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // Đổi sang .png
  },
  {
    id: '4',
    title: 'TypeScript',
    progress: 50,
    author: 'Microsoft',
    // url png
    img: 'https://redux.js.org/img/redux-logo-landscape.png',
  },
  {
    id: '5',
    title: 'Redux',
    progress: 80,
    author: 'Facebook',
    img: 'https://redux.js.org/img/redux-logo-landscape.png',
  },
  {
    id: '6',
    title: 'Redux',
    progress: 80,
    author: 'Facebook',
    img: 'https://redux.js.org/img/redux-logo-landscape.png',
  },
  {
    id: '7',
    title: 'Redux',
    progress: 80,
    author: 'Facebook',
    img: 'https://redux.js.org/img/redux-logo-landscape.png',
  },
];

export default function MyCoursesScreen() {
  return (
    <RootLayout>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 0 }}>
        {courses.map((course) => (
          <CourseCardPaper
            key={course.id}
            title={course.title}
            creater={course.author}
            progress={course.progress}
            imageSource={{ uri: course.img }}
          />
        ))}
      </View>
    </RootLayout>
  );
}
