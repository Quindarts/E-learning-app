import AvatarPaper from '@/components/ui/Avatar';
import theme from '@/theme';
import React from 'react';
import { Image, View } from 'react-native';

function VideoFrame({ course }: any) {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        backgroundColor: theme.colors.primary,
      }}
    >
      <Image
        style={{
          width: '100%',
          height: 200,
          zIndex: 1,
        }}
        source={{ uri: course?.imgUrls[0] }}
      />
    </View>
  );
}

export default VideoFrame;
