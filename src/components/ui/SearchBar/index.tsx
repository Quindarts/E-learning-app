import { useState } from 'react';
import { Searchbar, SearchbarProps } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';

const SearchBarPaper: React.FC<SearchbarProps> = (props) => {
  const { ...rest } = props;
  // const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Searchbar
      {...rest}
      placeholder='Search here'
      // value={searchQuery}
      // onChangeText={setSearchQuery}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      icon={() => (
        <View
          style={{
            backgroundColor: '#0F3975',
            borderRadius: 100,
            padding: 5,
            margin: 0,
          }}
        >
          <Feather name='search' size={22} color='white' />
        </View>
      )}
      style={{
        borderRadius: 100,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderColor: isFocused ? '#0F3975' : '#DEDEDE',
        borderWidth: 1,
        width: '100%',

        // height: 48,
      }}
      // inputStyle={{
      //   fontSize: 14,
      //   fontWeight: 500,
      //   color: '#858383',
      //   minHeight: 0,
      // }}
      placeholderTextColor={'#858383'}
    />
  );
};
export default SearchBarPaper;
