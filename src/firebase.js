import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDV17YHRaj0B0rxh3m_L6ccTXLixOCYzto",
    authDomain: "tinder-clone-4d591.firebaseapp.com",
    projectId: "tinder-clone-4d591",
    storageBucket: "tinder-clone-4d591.appspot.com",
    messagingSenderId: "12008131514",
    appId: "1:12008131514:web:0d8c8a916c55c0b71f6b83",
    measurementId: "G-CZ2GFXPW1F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;