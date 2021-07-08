import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCyNbGxk5JLVIP4PIva_i66Gpv9li3bRqE",
	authDomain: "airbnb-clone-f74de.firebaseapp.com",
	databaseURL: "https://airbnb-clone-f74de.firebaseio.com",
	projectId: "airbnb-clone-f74de",
	storageBucket: "airbnb-clone-f74de.appspot.com",
	messagingSenderId: "139838569942",
	appId: "1:139838569942:web:9b859a6635414f12a57877",
	measurementId: "G-JJDZL6PEHE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage();
export default storage;
