import { initializeApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBc5qGjT2Y8IEWd157XXizyCjCBznc7UxQ',
  authDomain: 'comfood-9ee59.firebaseapp.com',
  databaseURL:
    'https://comfood-9ee59-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'comfood-9ee59',
  storageBucket: 'comfood-9ee59.appspot.com',
  messagingSenderId: '775192178749',
  appId: '1:775192178749:web:5b68d43efedb5c98bf7a54',
  measurementId: 'G-E8D8YZMZYV',
};

const db = initializeApp(firebaseConfig);
const firebaseData = getDatabase(db);

export default firebaseData;
