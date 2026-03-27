import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AccountScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title">Account</ThemedText>
        <ThemedText type="default">Account tab content goes here.</ThemedText>

        <Pressable style={styles.button} onPress={() => router.push('/login')}>
          <ThemedText type="linkPrimary">Go to Login</ThemedText>
        </Pressable>
        <Pressable style={styles.button} onPress={() => router.push('/register')}>
          <ThemedText type="linkPrimary">Go to Register</ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
});
