import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export function useSign() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function onFirebase() {
    setError(null);
    setLoading(true);
    database()
      .ref('post')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        const sortData = Object.values(data);
        sortData.sort(function (a, b) {
          return b.time - a.time;
        });
        setResponse(sortData);
      });
  }
}
