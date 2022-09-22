import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainTabs } from './screens/Navigators';
import TaskContext from './Model';
const { RealmProvider } = TaskContext;

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RealmProvider>
          <MainTabs />
        </RealmProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
