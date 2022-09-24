import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DictionaryScreen from './Dictionary';
import TestingScreen from './Testing';
import SettingsScreen from './Settings';
import WordScreen from './Word';
import CheckScreen from './Check';
import { NavigatorScreenParams } from '@react-navigation/native';

export type DictionaryStackParamList = {
  Dictionary: undefined;
  Word: undefined;
};

const DictionaryStackNavigator = createNativeStackNavigator<DictionaryStackParamList>();

export function DictionaryStack() {
  return (
    <DictionaryStackNavigator.Navigator>
      <DictionaryStackNavigator.Screen name="Dictionary" component={DictionaryScreen} />
      <DictionaryStackNavigator.Screen name="Word" component={WordScreen} />
    </DictionaryStackNavigator.Navigator>
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
  DictionaryStack: NavigatorScreenParams<DictionaryStackParamList>;
  TestingStack: NavigatorScreenParams<TestingStackParamList>;
  Settings: undefined;
};

const MainTabNavigator = createBottomTabNavigator<MainTabParamList>();

export function MainTabs() {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen name="DictionaryStack" component={DictionaryStack} />
      <MainTabNavigator.Screen name="TestingStack" component={TestingStack} />
      <MainTabNavigator.Screen name="Settings" component={SettingsScreen} />
    </MainTabNavigator.Navigator>
  );
}
