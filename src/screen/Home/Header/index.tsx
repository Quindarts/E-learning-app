import ButtonPaper from '@/components/ui/Button';
import SearchBarPaper from '@/components/ui/SearchBar';
import React from 'react';
import { View } from 'react-native';

type FilterType = {
  id: string;
  title: string;
  value: string;
};
const FILTER_DATA: FilterType[] = [
  {
    id: '1',
    title: 'All',
    value: '',
  },
  {
    id: '2',
    title: 'React',
    value: '',
  },
  {
    id: '3',
    title: 'JavaScript',
    value: '',
  },
];
function Header() {
  return (
    <>
      <SearchBarPaper value='' />
      {/* filter */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {FILTER_DATA.map((item, index) => (
          <ButtonPaper
            onPress={() => {}}
            mode='outlined'
            size='sm'
            textColors='black'
            style={{ margin: 2, borderRadius: 20 }}
            key={index}
            labelStyle={{ fontSize: 14, marginHorizontal: 12, fontWeight: 'medium' }}
          >
            {item.title}
          </ButtonPaper>
        ))}
      </View>
    </>
  );
}

export default Header;
