import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { TestingStackParamList } from '../Navigators';

type TestingScreenProps = NativeStackScreenProps<TestingStackParamList, 'Testing'>;

export default function TestingScreen({ navigation }: TestingScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Testing Screen</Text>
      <Button title="Open check screen" onPress={() => navigation.navigate('Check')} />
    </View>
  );
}
