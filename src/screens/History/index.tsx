import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, FlatList, Text, View } from 'react-native';
import { HistoryStackParamList } from '../Navigators';
import TaskContext, { Task } from '../../Model';
const { useRealm, useQuery } = TaskContext;

type HistoryScreenProps = NativeStackScreenProps<HistoryStackParamList, 'History'>;

export default function HistoryScreen({ navigation }: HistoryScreenProps) {
  const realm = useRealm();
  const handleAddTask = React.useCallback(
    (description: string): void => {
      if (!description) {
        return;
      }
      realm.write(() => {
        realm.create('Task', Task.generate(description));
      });
    },
    [realm],
  );
  const tasks = useQuery(Task);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
      <Button title="Open word screen" onPress={() => navigation.navigate('Word')} />
      <Button title="Add task" onPress={() => handleAddTask(`test ${Math.random()}`)} />

      <FlatList
        data={tasks}
        keyExtractor={task => task._id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>description={item.description}</Text>
            <Text>isComplete={item.isComplete}</Text>
          </View>
        )}
      />
    </View>
  );
}
