import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export function useSign() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function signUp(email, password) {
    setError(null);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }

  function signIn(email, password) {
    setError(null);
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }

  function errorReset() {
    setError(null);
  }

  return {loading, error, response, signUp, signIn, errorReset};
}
