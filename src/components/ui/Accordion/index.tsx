import theme from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';

function AccordionPaper(props: any) {
  const { list, handleExpanded, expanded } = props;

  return (
    <List.Section
      style={{
        flex: 1,
        width: '100%',
      }}
      title=''
    >
      {list?.map((item: any, index: number) => (
        <List.Accordion
          key={index}
          style={{
            backgroundColor: '#F4F9FF',
            borderColor: '#DEDEDE',
            borderWidth: 1,
            padding: 4,
            borderRadius: 5,
          }}
          titleMaxFontSizeMultiplier={14}
          titleNumberOfLines={2}
          titleStyle={{
            fontWeight: '700',
            fontSize: 13,
            alignItems: 'center',
            color: '#333',
          }}
          title={item.name}
          expanded={expanded}
          onPress={handleExpanded}
        >
          <View
            style={{
              backgroundColor: '#F4F9FF',
              borderRadius: 18,
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
          >
            {item?.details?.map((value: any, subIndex: number) => (
              <List.Item
                key={value.id || subIndex}
                title={
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                      height: '100%',
                      gap: 5,
                    }}
                  >
                    <MaterialIcons name={value.icon} size={24} color={theme.colors.primary} />
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 12,
                        paddingHorizontal: 0,
                        flexWrap: 'wrap',
                        maxWidth: '100%',
                      }}
                      key={value.id || subIndex}
                    >
                      {value.content}
                    </Text>
                  </View>
                }
              />
            ))}
          </View>
        </List.Accordion>
      ))}
    </List.Section>
  );
}

export default AccordionPaper;
