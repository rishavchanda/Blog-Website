import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAGPeqk3fG2nbEum1mVeWH94fxHSO7Xs4c",
    authDomain: "blog-website-eca06.firebaseapp.com",
    projectId: "blog-website-eca06",
    storageBucket: "blog-website-eca06.appspot.com",
    messagingSenderId: "149188195356",
    appId: "1:149188195356:web:eab494906b5ab1a60c1bd9",
    measurementId: "G-ECDTCEZ36R"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };