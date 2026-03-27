import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function AppDrawerLayout() {
  return (
    <Drawer
      initialRouteName="(tabs)"
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Login" onPress={() => router.push('/login')} />
          <DrawerItem label="Register" onPress={() => router.push('/register')} />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
