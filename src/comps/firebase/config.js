import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "gallery-548e8.firebaseapp.com",
    projectId: "gallery-548e8",
    storageBucket: "gallery-548e8.appspot.com",
    messagingSenderId: "1092867259433",
    appId: "1:1092867259433:web:29daa7b11d2803d26ab038"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStore = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFireStore, projectStore, timestamp};