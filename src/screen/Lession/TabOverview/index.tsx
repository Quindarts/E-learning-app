import ButtonPaper from '@/components/ui/Button';
import theme from '@/theme';
import { ROUTING } from '@/utils/constants';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button, Chip, Card, Title, Paragraph, Text } from 'react-native-paper';
function TabOverview() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Card style={{ padding: 8, flex: 1 }}>
      <Card.Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <View>
            <Text variant='titleMedium' style={{ fontWeight: 'bold', marginBottom: 2 }}>
              Mobile App UI UX
            </Text>
            <Paragraph style={{ color: '#6b7280' }}>By Tom Makesman</Paragraph>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              {[1, 2, 3, 4, 5].map(() => (
                <Text style={{ color: theme.colors.primary, marginRight: 4, fontSize: 14 }}>★</Text>
              ))}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 32,
                textAlign: 'right',
              }}
            >
              $85
            </Text>
            <Text
              variant='bodySmall'
              style={{
                marginTop: 10,
                color: '#7E7E7E',
                textAlign: 'right',
              }}
            >
              lorem 123131
            </Text>
          </View>
        </View>

        <Paragraph style={{ color: '#374151', marginBottom: 16 }}>
          Lorem ipsum dolor sit amet consectetur. Lectus viverra sed aliquam quis enim leo. Turpis
          nec facilisis placerat dolor ac donec.
        </Paragraph>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: '#F4F9FF',
            borderRadius: 15,
            marginBottom: 16,
            paddingHorizontal: 20,
            paddingVertical: 22,
            gap: 10,
            borderWidth: 0.5,
            borderColor: '#e5e5e5',
          }}
        >
          <View
            style={{
              width: '48%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MaterialCommunityIcons name='bookshelf' size={16} color={theme.colors.primary} />
            <Text variant='bodyLarge' style={{ color: theme.colors.primary }}>
              100+ Lessons
            </Text>
          </View>
          <View
            style={{
              width: '48%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MaterialCommunityIcons name='police-badge' size={16} color={theme.colors.primary} />

            <Text variant='bodyLarge' style={{ color: theme.colors.primary }}>
              Certificate
            </Text>
          </View>
          <View
            style={{
              width: '48%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MaterialCommunityIcons
              name='clock-time-eight'
              size={16}
              color={theme.colors.primary}
            />
            <Text variant='bodyLarge' style={{ color: theme.colors.primary }}>
              7 Weeks
            </Text>
          </View>
          <View
            style={{
              width: '48%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MaterialCommunityIcons name='sale' size={16} color={theme.colors.primary} />
            <Text variant='bodyLarge' style={{ color: theme.colors.primary }}>
              20% off
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Skills</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}>
          <Chip style={{ margin: 4 }}>UI/UX</Chip>
          <Chip style={{ margin: 4 }}>Website Design</Chip>
          <Chip style={{ margin: 4 }}>Figma</Chip>
          <Chip style={{ margin: 4 }}>XD</Chip>
          <Chip style={{ margin: 4 }}>Animation</Chip>
          <Chip style={{ margin: 4 }}>User Persona</Chip>
        </View>
        {/* <ButtonPaper
          mode='contained'
          textColor='white'
          rounded='sm'
          size='sm'
          onPress={() => {
            navigation.navigate(ROUTING.DETAIL);
          }}
        >
          MAKE AN ENROLLMENT
        </ButtonPaper> */}
      </Card.Content>
    </Card>
  );
}

export default TabOverview;
