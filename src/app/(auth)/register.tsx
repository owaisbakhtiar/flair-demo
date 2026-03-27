import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function RegisterScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topRow}>
          <View style={{ flex: 1 }} />
          <Pressable
            accessibilityRole="button"
            onPress={() => router.replace('/')}
            style={styles.closeButton}
          >
            <ThemedText type="linkPrimary" style={styles.closeText}>
              X
            </ThemedText>
          </Pressable>
        </View>

        <View style={styles.content}>
          <ThemedText type="title">Register</ThemedText>
          <ThemedText type="default">
            Basic register screen placeholder.
          </ThemedText>

          <ThemedText type="linkPrimary" onPress={() => router.push('/login')}>
            Go to Login
          </ThemedText>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 4,
    gap: 8,
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  closeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
  },
});

