import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCuMPRdnRO8WKRalPlaA5FlbimrIh_-ZNQ",
    authDomain: "nysl-app1.firebaseapp.com",
    databaseURL: "https://nysl-app1.firebaseio.com",
    projectId: "nysl-app1",
    storageBucket: "nysl-app1.appspot.com",
    messagingSenderId: "634313393814"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();