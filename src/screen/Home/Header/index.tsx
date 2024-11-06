import ButtonPaper from '@/components/ui/Button';
import SearchBarPaper from '@/components/ui/SearchBar';
import useDebounce from '@/hook/useDebounce';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { Menu, Text } from 'react-native-paper';

const SEARCH_KEYS = [
  { label: 'Course Name', value: 'name' },
  { label: 'Author', value: 'author' },
  { label: 'Description', value: 'description' },
];
interface HeaderProps {
  fetchCourses: () => void;
  fetchFilteredCourses: (filters: any) => void;
  fetchCategories: () => void;
  categories: string[];
}

function Header({ fetchCourses, fetchFilteredCourses, fetchCategories, categories }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [selectedSearchKey, setSelectedSearchKey] = useState('name');
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useLayoutEffect(() => {
    if (selectedCategories.length === 0 && debouncedSearchTerm === '') {
      fetchCourses();
      return;
    }

    fetchFilteredCourses({
      keywords: debouncedSearchTerm,
      category: selectedCategories.length ? selectedCategories : [],
      sortField: selectedSearchKey,
      minPrice: 0,
      maxPrice: 9999999,
    });
  }, [selectedCategories, debouncedSearchTerm]);

  const handleSelectAll = () => {
    setSelectedCategories([]);
  };

  const handleSelectCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <View>
      <SearchBarPaper value={searchTerm} onChangeText={(text) => setSearchTerm(text)} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          marginBottom: 4,
        }}
      >
        <Text variant='bodyMedium' style={{ marginLeft: 10 }}>
          Search by:
        </Text>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <ButtonPaper
              onPress={() => setMenuVisible(true)}
              mode='outlined'
              size='sm'
              rounded='lg'
              compact
              style={{ marginLeft: 10 }}
            >
              {SEARCH_KEYS.find((key) => key.value === selectedSearchKey)?.label || 'Search Key'}
            </ButtonPaper>
          }
        >
          {SEARCH_KEYS.map((key) => (
            <Menu.Item
              key={key.value}
              onPress={() => {
                setSelectedSearchKey(key.value); // Set the selected search key
                setMenuVisible(false); // Close the menu
              }}
              title={key.label}
            />
          ))}
        </Menu>
      </View>
      {/* filter */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 8, gap: 4 }}>
        {/* Dynamically render categories */}
        <ButtonPaper
          key='all'
          onPress={handleSelectAll} // Unselect other filters when "All" is clicked
          mode={selectedCategories.length === 0 ? 'contained' : 'outlined'} // If no category is selected, "All" is selected
          size='sm'
          textColors={selectedCategories.length === 0 ? 'white' : 'black'}
          style={{ margin: 2, borderRadius: 20 }}
          compact
        >
          All
        </ButtonPaper>
        {categories.map((category) => (
          <ButtonPaper
            key={category}
            onPress={() => {
              handleSelectCategory(category); // Handle the selection logic
              // handleSearch(); // Fetch filtered courses based on the selection
            }}
            mode={selectedCategories.includes(category) ? 'contained' : 'outlined'} // If the category is selected, highlight it
            size='sm'
            textColors={selectedCategories.includes(category) ? 'white' : 'black'}
            style={{ margin: 2, borderRadius: 20 }}
            compact
          >
            {category}
          </ButtonPaper>
        ))}
      </View>
    </View>
  );
}

export default Header;
