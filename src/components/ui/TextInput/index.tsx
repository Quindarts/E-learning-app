import { useField } from 'formik';
import { useState } from 'react';
import { View } from 'react-native';
import { Text, HelperText, TextInput, TextInputProps } from 'react-native-paper';

interface TextFieldProps extends TextInputProps {
  isRequired?: boolean;
  label?: string;
  mode?: 'flat' | 'outlined';
  icon?: string;
  dense?: boolean; // nhỏ gọn
  textColor?: string;
  name: string;
  isSecure?: boolean;
}
const textColorMapping = (text: string) => {
  let value = '#858383';
  switch (text) {
    case 'default':
      value = '#858383';
      break;
    case 'primary':
      value = '#000';
      break;
    //   case 'secondary':
    //     value = '#fff';
    //     break;
    //   case 'danger':
    //     value = '#f00';
    //     break;
  }
  return value;
};
export default function TextInputPaper(props: TextFieldProps) {
  const {
    isRequired = false,
    label,
    mode = 'outlined',
    dense = false,
    textColor = '#858383',
    isSecure = false,
    icon,
    name,
    ...rest
  } = props;
  const [visible, setVisible] = useState(false);
  // field is an object that contains name, value, onChange, onBlur
  // meta is an object that contains error, touched, value
  // helpers is an object that contains setValue, setTouched, setError
  const [field, meta, helpers] = useField(name); // name is name of the field in formik

  return (
    <View style={{ marginVertical: 5 }}>
      {label ? (
        <Text variant='labelLarge' style={{ fontWeight: 700 }}>
          {label}{' '}
          <Text variant='labelLarge' style={{ color: 'red' }}>
            {isRequired ? '*' : ''}
          </Text>
        </Text>
      ) : null}
      <TextInput
        mode={mode}
        textColor={textColorMapping(textColor)}
        outlineStyle={{ borderRadius: 6 }}
        dense={dense}
        secureTextEntry={isSecure && !visible}
        value={field.value}
        // onChangeText={field.onChange(name)}
        onChangeText={helpers.setValue}
        onBlur={field.onBlur(name)}
        error={meta.error && meta.touched ? true : false}
        right={
          icon ? (
            <TextInput.Icon
              icon={visible ? 'eye-off' : 'eye'}
              onPress={() => setVisible(!visible)}
            />
          ) : null
        }
        {...rest}
      />
      {meta.error && meta.touched ? (
        <HelperText type='error' visible={true}>
          {meta.error}
        </HelperText>
      ) : null}
    </View>
  );
}
