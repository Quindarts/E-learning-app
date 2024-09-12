import ButtonPaper from '@/components/ui/Button';
import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import SearchBarPaper from '@/components/ui/SearchBar';
import RootLayout from '@/layout/RootLayout';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SearchBar } from 'react-native-screens';
type filterData = {
  id: string;
  title: string;
};
const filterData: filterData[] = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'React',
  },
  {
    id: '3',
    title: 'JavaScript',
  },
];
export default function HomeScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <RootLayout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: '#fff',
        }}
      >
        <SearchBarPaper value='' />
        {/* filter */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
          {filterData.map((item, index) => (
            <ButtonPaper
              onPress={() => {}}
              mode='outlined'
              size='sm'
              // rounded='xl'
              textColors='black'
              style={{ margin: 2, borderRadius: 20 }}
              key={index}
              labelStyle={{ fontSize: 14, marginHorizontal: 12, fontWeight: 'medium' }}
            >
              {item.title}
            </ButtonPaper>
          ))}
        </View>
        {/* Continue watching */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
              Continue Watching
            </Text>
            <Text variant='bodyMedium'>View all</Text>
          </View>
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
        </View>
        {/* trending now */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginTop: 10,
            }}
          >
            <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
              Trending now
            </Text>
            <Text variant='bodyMedium'>View all</Text>
          </View>
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
        </View>
      </View>
    </RootLayout>
  );
}
