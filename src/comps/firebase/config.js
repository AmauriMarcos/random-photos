import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzRBwNtoKhQEZQ-HgL5JZOmjaGeJBe_sc",
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

export {projectFireStore, projectStore};