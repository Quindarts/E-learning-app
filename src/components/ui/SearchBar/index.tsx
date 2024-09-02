import React, { useCallback, useEffect } from 'react';
import { Searchbar, TextInput, TextInputProps } from 'react-native-paper';
import { SearchBarProps } from 'react-native-screens';
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';

// interface SearchBarType extends SearchBarProps {}
const SearchBarPaper: React.FC<SearchBarProps> = (props) => {
  const { ref, ...rest } = props; // ref is not allowed in Searchbar, so we need to remove it out of rest
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Searchbar
      placeholder='Search'
      {...rest}
      value={searchQuery}
      onChangeText={setSearchQuery}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      icon={() => (
        <View style={{ backgroundColor: '#0F3975', borderRadius: 100, padding: 5, margin: 0 }}>
          <Feather name='search' size={22} color='white' />
        </View>
      )}
      style={{
        borderRadius: 100,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderColor: isFocused ? '#0F3975' : '#DEDEDE',
        borderWidth: 1,
        height: 48,
      }}
      inputStyle={{
        fontSize: 14,
        fontWeight: 500,
        color: '#858383',
        minHeight: 0,
      }}
      placeholderTextColor={'#858383'}
    />
  );
};
export default SearchBarPaper;
