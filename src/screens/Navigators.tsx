import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from './History';
import TestingScreen from './Testing';
import SettingsScreen from './Settings';
import WordScreen from './Word';
import CheckScreen from './Check';
import { NavigatorScreenParams } from '@react-navigation/native';

export type HistoryStackParamList = {
  History: undefined;
  Word: undefined;
};

const HistoryStackNavigator = createNativeStackNavigator<HistoryStackParamList>();

export function HistoryStack() {
  return (
    <HistoryStackNavigator.Navigator>
      <HistoryStackNavigator.Screen name="History" component={HistoryScreen} />
      <HistoryStackNavigator.Screen name="Word" component={WordScreen} />
    </HistoryStackNavigator.Navigator>
  );
}

export type TestingStackParamList = {
  Testing: undefined;
  Check: undefined;
};

const TestingStackNavigator = createNativeStackNavigator<TestingStackParamList>();

export function TestingStack() {
  return (
    <TestingStackNavigator.Navigator>
      <TestingStackNavigator.Screen name="Testing" component={TestingScreen} />
      <TestingStackNavigator.Screen name="Check" component={CheckScreen} />
    </TestingStackNavigator.Navigator>
  );
}

export type MainTabParamList = {
  HistoryStack: NavigatorScreenParams<HistoryStackParamList>;
  TestingStack: NavigatorScreenParams<TestingStackParamList>;
  Settings: undefined;
};

const MainTabNavigator = createBottomTabNavigator<MainTabParamList>();

export function MainTabs() {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen name="HistoryStack" component={HistoryStack} />
      <MainTabNavigator.Screen name="TestingStack" component={TestingStack} />
      <MainTabNavigator.Screen name="Settings" component={SettingsScreen} />
    </MainTabNavigator.Navigator>
  );
}
