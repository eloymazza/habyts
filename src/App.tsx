import React from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebase.config';

initializeApp(firebaseConfig);

const App: React.FunctionComponent = () => (
  <div className="App">
    <h1>Habyts</h1>
  </div>
);

export default App;
