import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvAEfuE5dtj6UzLa2buwUeftYtk-X46m8',
  authDomain: 'habyts-302dc.firebaseapp.com',
  databaseURL: 'https://habyts-302dc-default-rtdb.firebaseio.com',
  projectId: 'habyts-302dc',
  storageBucket: 'habyts-302dc.appspot.com',
  messagingSenderId: '888564463944',
  appId: '1:888564463944:web:58e657732cc767c83fdb7d',
  measurementId: 'G-GSCHSK2582'
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
export const auth = getAuth(firebaseApp);
