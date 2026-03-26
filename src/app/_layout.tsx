import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer initialRouteName="index">
        <Drawer.Screen
          name="index"
          options={{
            title: 'Home',
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen
          name="login"
          options={{
            title: 'Login',
            drawerLabel: 'Login',
          }}
        />
        <Drawer.Screen
          name="register"
          options={{
            title: 'Register',
            drawerLabel: 'Register',
          }}
        />
        <Drawer.Screen
          name="explore"
          options={{
            drawerItemStyle: { display: 'none' },
            title: 'Explore',
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}
