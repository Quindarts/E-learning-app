import React, { useState } from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '@/theme';

function AccordionGroupPaper({ list }: any) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleExpanded = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <List.Section
      style={{
        flex: 1,
        width: '100%',
        minHeight: 165,
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
          expanded={expandedId === item.id}
          onPress={() => handleExpanded(item.id)}
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

export default AccordionGroupPaper;
