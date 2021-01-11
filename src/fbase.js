import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

firebase.initializeApp(firebaseConfig);
// const { arrayUnion } = firebase.FieldValue;

// console.log('ARRAY UNION:', arrayUnion);
/*
Atomically add a new region to the "regions" array field.
washingtonRef.update({
  regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
});
*/
export const { arrayUnion, arrayRemove } = firebase.firestore.FieldValue;

export const auth = firebase.auth();
const db = firebase.firestore();

export default db;
