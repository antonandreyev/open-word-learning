import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, FlatList, Text, View } from 'react-native';
import { DictionaryStackParamList } from '../Navigators';
import * as database from '../../model/database';
import { Word } from '../../model/types';

type DictionaryScreenProps = NativeStackScreenProps<DictionaryStackParamList, 'Dictionary'>;

export default function DictionaryScreen({ navigation }: DictionaryScreenProps) {
  const [words, setWords] = React.useState<Word[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      await database.setupDatabase();
      const storedWords = await database.getWords();
      setWords(storedWords);
    };
    loadData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dictionary Screen</Text>
      <Button title="Open word screen" onPress={() => navigation.navigate('Word')} />
      <Button
        title="Add test word"
        onPress={async () => {
          const newWord = { value: `w${Math.random()}` };
          const insertResult = await database.insertWord(newWord);
          console.log('insertResult', insertResult);
          setWords(prevVal => [...prevVal, { id: insertResult, ...newWord }]);
        }}
      />
      <Text>Stored words:</Text>
      <FlatList
        data={words}
        renderItem={word => <Text>{word.item.value}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
