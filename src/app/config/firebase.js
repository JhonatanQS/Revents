import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey:"AIzaSyDlJLD5tEgR2jflUaJHT9WtxU0PjwTmxY4",
    authDomain: "reventscourse-de5dd.firebaseapp.com",
    databaseURL: "https://reventscourse-de5dd.firebaseio.com",
    projectId: "reventscourse-de5dd",
    storageBucket: "reventscourse-de5dd.appspot.com",
    messagingSenderId: "275550377277",
    appId: "1:275550377277:web:2878e83dae80d476a36154"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;