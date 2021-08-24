import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("history.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY NOT NULL,
            idProduct TEXT NOT NULL,
            name TEXT NOT NULL,
            date TEXT NOT NULL
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        )
      });
    });
  
    return promise;
}

export const insertHistory = (
    idProduct,
    name,
    date
  ) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO history (idProduct, name, date) VALUES (?, ?, ?)`,
          [idProduct, name, date],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
}

export const fetchHistory = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM history;',
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
}
