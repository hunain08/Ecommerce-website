import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =   {
    apiKey: "AIzaSyB9mGxyvNo7_zWEPynTV8Bc-CRBfylcZ6U",
    authDomain: "shopping-web-43731.firebaseapp.com",
    projectId: "shopping-web-43731",
    storageBucket: "shopping-web-43731.appspot.com",
    messagingSenderId: "161250466371",
    appId: "1:161250466371:web:b3f6deafef1723e49212f6",
    measurementId: "G-43ZMRTXY4C"
  };
  firebase.initializeApp(config); 
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;