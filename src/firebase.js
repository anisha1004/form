import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCArxHV69_f-Gb-nulxaBJaacTfOeW6tcs",
    authDomain: "campaign-form.firebaseapp.com",
    projectId: "campaign-form",
    storageBucket: "campaign-form.appspot.com",
    messagingSenderId: "558427473664",
    appId: "1:558427473664:web:3e6085fa296d376f3a15e5",
    measurementId: "G-Z6Z2YHZW49"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;