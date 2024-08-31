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
        height: 165,
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
          title={item.name}
          expanded={expanded}
          onPress={handleExpanded}
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
                      gap: 15,
                    }}
                  >
                    {/* <MaterialIcons name={value.icon} size={24} color={theme.colors.primary} /> */}
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 12,
                        paddingHorizontal: 0,
                        flex: 1,
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
