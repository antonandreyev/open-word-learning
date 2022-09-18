import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { HistoryStackParamList } from '../Navigators';

type HistoryScreenProps = NativeStackScreenProps<HistoryStackParamList, 'History'>;

export default function HistoryScreen({ navigation }: HistoryScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
      <Button title="Open word screen" onPress={() => navigation.navigate('Word')} />
    </View>
  );
}
