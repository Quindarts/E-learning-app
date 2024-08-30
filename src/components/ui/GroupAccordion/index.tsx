import theme from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
function GroupAccordion() {
  return (
    <List.AccordionGroup>
      <List.Accordion
        style={{
          backgroundColor: '#F4F9FF',
          borderColor: '#DEDEDE',
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
        }}
        titleMaxFontSizeMultiplier={14}
        titleNumberOfLines={2}
        titleStyle={{
          fontWeight: '700',
          fontSize: 14,
          height: 20,
          alignItems: 'center',
          color: '#333',
        }}
        descriptionStyle={{
          height: 'auto',
        }}
        title={'1232312312'}
      >
        <View
          style={{
            backgroundColor: '#F4F9FF',
            minHeight: 165,
            borderRadius: 18,
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 40,
          }}
        >
          <List.Item
            title={
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  height: '100%',
                  gap: 15,
                }}
              >
                <MaterialIcons name={'folder'} size={24} color={theme.colors.primary} />
                <Text
                  style={{
                    color: '#333',
                    fontSize: 12,
                    paddingHorizontal: 0,
                    flex: 1,
                  }}
                >
                  123123
                </Text>
              </View>
            }
          />
        </View>
      </List.Accordion>
    </List.AccordionGroup>
  );
}

export default GroupAccordion;
