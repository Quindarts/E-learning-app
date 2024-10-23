// LoadingOverlay.js
import theme from '@/theme';
import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const LoadingOverlay = ({ visible }: any) => {
  return (
    <Modal visible={visible} transparent={true} animationType='fade' onRequestClose={() => {}}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' animating={true} color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: theme.colors.primary,
  },
});

export default LoadingOverlay;
