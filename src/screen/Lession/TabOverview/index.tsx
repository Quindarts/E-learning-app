import theme from '@/theme';
import { convertVND } from '@/utils/convertVND';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Chip, Card, Paragraph, Text } from 'react-native-paper';
function TabOverview({ course }: { course: any }) {
  // console.log('🚀 ~ TabOverview ~ course: ', course);
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
              {/* Mobile App UI UX */}
              {course.name}
            </Text>
            <Paragraph style={{ color: '#6b7280' }}>By {course.author}</Paragraph>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              {[1, 2, 3, 4, 5].map((item, key) => (
                <Text
                  key={key}
                  style={{ color: theme.colors.primary, marginRight: 4, fontSize: 14 }}
                >
                  ★
                </Text>
              ))}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 28,
                textAlign: 'right',
              }}
            >
              {convertVND(course.price * 22700)}
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
          {course.description}
          {/* Lorem ipsum dolor sit amet consectetur. Lectus viverra sed aliquam quis enim leo. Turpis
          nec facilisis placerat dolor ac donec. */}
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
              {course.lessons.length} Lessons
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
              {(parseInt(course.totalDuration) / (60 * 60)).toFixed(2)} hours
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
          {Array.isArray(course.category) ? (
            course.category.map((item: any, key: number) => (
              <Chip key={key} style={{ marginRight: 8, marginBottom: 8 }}>
                {item}
              </Chip>
            ))
          ) : (
            <Chip style={{ marginRight: 8, marginBottom: 8 }}>{course.category}</Chip>
          )}
        </View>
      </Card.Content>
    </Card>
  );
}

export default TabOverview;
