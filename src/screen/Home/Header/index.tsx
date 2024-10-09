import ButtonPaper from '@/components/ui/Button';
import SearchBarPaper from '@/components/ui/SearchBar';
import { useCourse } from '@/hook/useCourse';
import useDebounce from '@/hook/useDebounce';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { Menu, Text } from 'react-native-paper';
type FilterType = {
  id: string;
  title: string;
  value: string;
};
// const FILTER_DATA: FilterType[] = [
//   {
//     id: '1',
//     title: 'All',
//     value: '',
//   },
//   {
//     id: '2',
//     title: 'React',
//     value: '',
//   },
//   {
//     id: '3',
//     title: 'JavaScript',
//     value: '',
//   },
// ];
// Available search keys
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
  const [searchTerm, setSearchTerm] = useState(''); // Search input state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Track selected categories (multiple)
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [selectedSearchKey, setSelectedSearchKey] = useState('name'); // Default search key is "name"
  const [menuVisible, setMenuVisible] = useState(false); // For the dropdown menu
  // const { fetchFilteredCourses, fetchCategories, courses, categories } = useCourse(); // Destructure the useCourse hook

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  useLayoutEffect(() => {
    // nếu không có category nào được chọn thì fetch tất cả các khóa học
    if (selectedCategories.length === 0) {
      fetchCourses();
      return;
    }

    // Gọi API khi `selectedCategories` hoặc `searchTerm` thay đổi
    fetchFilteredCourses({
      keywords: debouncedSearchTerm,
      category: selectedCategories.length ? selectedCategories : [],
      sortField: selectedSearchKey,
      minPrice: 100, // Ví dụ thêm khoảng giá vào
      maxPrice: 500,
    });
    // console.log({
    //   keywords: debouncedSearchTerm,
    //   category: selectedCategories.length ? selectedCategories : [],
    //   sortField: selectedSearchKey,
    //   minPrice: 100, // Ví dụ thêm khoảng giá vào
    //   maxPrice: 500,
    // });
  }, [selectedCategories, debouncedSearchTerm]); // Mỗi khi state này thay đổi, fetch lại dữ liệu

  // Handle selection of "All Courses"
  const handleSelectAll = () => {
    setSelectedCategories([]); // Clear all other selected categories
  };

  // Handle category selection
  const handleSelectCategory = (category: string) => {
    // Nếu đã chọn category thì bỏ chọn, nếu chưa chọn thì thêm vào
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <>
      <SearchBarPaper
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        // onSubmitEditing={handleSearch}
      />
      {/* Dropdown for selecting search key */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <Text variant='bodyMedium' style={{ marginLeft: 10 }}>
          Search by:
        </Text>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            // Show the selected search key or "Search Key" if none is selected
            <ButtonPaper
              onPress={() => setMenuVisible(true)}
              mode='outlined'
              size='sm'
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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {/* Dynamically render categories */}
        <ButtonPaper
          key='all'
          onPress={handleSelectAll} // Unselect other filters when "All" is clicked
          mode={selectedCategories.length === 0 ? 'contained' : 'outlined'} // If no category is selected, "All" is selected
          size='sm'
          textColors={selectedCategories.length === 0 ? 'white' : 'black'}
          style={{ margin: 2, borderRadius: 20 }}
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
          >
            {category}
          </ButtonPaper>
        ))}
      </View>
    </>
  );
}

export default Header;
