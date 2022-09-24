import SQLite from 'react-native-sqlite-2';
import { NewWord, Word } from './types';

const database_name = 'owl.db';
const database_version = '1.0';
const database_displayname = 'OWL Database';

const db = SQLite.openDatabase(database_name, database_version, database_displayname);

export function getWords(): Promise<Word[]> {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tx.executeSql('select * from words', [], (_, { rows }) => resolve(rows._array as Word[]));
      },
      error => reject(error),
    );
  });
}

export function insertWord(word: NewWord): Promise<number> {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql('insert into words (value) values (?)', [word.value], (_, { insertId }) => resolve(insertId));
      },
      error => reject(error),
    );
  });
}

export function setupDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql('create table if not exists words (id integer primary key not null, value text);');
      },
      error => reject(error),
      () => resolve(),
    );
  });
}
