import AvatarPaper from '@/components/ui/Avatar';
import ButtonPaper from '@/components/ui/Button';
import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import RootLayout from '@/layout/RootLayout';
import useUserStore from '@/store/auth/useUserStore';
import { FlatList, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';

type skillsData = {
  id: string;
  title: string;
};

const skills: skillsData[] = [
  {
    id: '1',
    title: 'React Native',
  },
  {
    id: '2',
    title: 'React',
  },
  {
    id: '3',
    title: 'JavaScript',
  },
  {
    id: '4',
    title: 'TypeScript',
  },
  {
    id: '5',
    title: 'Redux',
  },
];

export default function ProfileScreen() {
  const user = useUserStore((state) => state.user);

  return (
    <RootLayout>
      {/* // <ScrollView
    //   style={{
    //     flex: 1,
    //     padding: 20,
    //     backgroundColor: '#fff',
    //   }}
    // > */}
      <View
        style={{
          paddingTop: 0,
        }}
      >
        {/* content */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            paddingTop: 110,
            borderRadius: 23,
            paddingHorizontal: 20,
            paddingBottom: 20,
            backgroundColor: '#F4F9FF',
            borderColor: '#DEDEDE',
            borderWidth: 1,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* avatar */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
              position: 'absolute',
              top: -70,
              zIndex: 1, // to be on top of the parent
            }}
          >
            <AvatarPaper
              variant={'lg'}
              href={{ uri: 'https://avatars.githubusercontent.com/u/47231147?v=4' }}
            />
            <Text variant='titleLarge' style={{ fontWeight: 'bold' }}>
              {user?.lastName}
            </Text>
            <Text variant='bodySmall' style={{ color: '#7E7E7E' }}>
              {user?.email}
            </Text>
          </View>
          {/* user info */}
          <View>
            {/* About me */}
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 18, lineHeight: 20, fontWeight: 'bold', marginBottom: 10 }}>
                About me
              </Text>
              <Text variant='bodySmall'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in odio eget lectus
                tincidunt. Donec in odio eget lectus tincidunt. Donec in odio eget lectus tincidunt.
              </Text>
            </View>
            {/* My skills */}

            <Text
              style={{
                fontSize: 18,
                lineHeight: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              My skills
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
              {skills.map((item, Index) => (
                <ButtonPaper
                  onPress={() => {}}
                  mode='outlined'
                  size='sm'
                  // rounded='xl'
                  textColors='black'
                  style={{ margin: 2, borderRadius: 20 }}
                  key={Index}
                  labelStyle={{ fontSize: 14, marginHorizontal: 12, fontWeight: 'medium' }}
                >
                  {item.title}
                </ButtonPaper>
              ))}
            </View>
          </View>
        </View>
        {/* enrolled courses */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
            Enrolled Courses
          </Text>
          <Text variant='bodyMedium'>View all</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {user?.currentCourses?.map((course: any, Index) => (
            <CardProjectPaper
              key={Index}
              courseId={course.course._id}
              imageSource={{ uri: course.course.imgUrls[0] }}
              name={course.course.name}
              author={course.course.author}
              initialRating={5}
              progress={Number(course.course.totalDuration)}
            />
          ))}
        </View>
      </View>
      {/* </ScrollView> */}
    </RootLayout>
  );
}
