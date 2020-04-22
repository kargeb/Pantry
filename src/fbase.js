import firebase from 'firebase';
import { API_FIREBASE } from './protected';

const firebaseConfig = {
  apiKey: API_FIREBASE,
  authDomain: 'pantry-29c74.firebaseapp.com',
  databaseURL: 'https://pantry-29c74.firebaseio.com',
  projectId: 'pantry-29c74',
  storageBucket: 'pantry-29c74.appspot.com',
  messagingSenderId: '31589261280',
  appId: '1:31589261280:web:509bf9b9f45520ea151585',
  measurementId: 'G-MM5HJRBGB0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
