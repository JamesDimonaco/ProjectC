import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAI1ALfu5h4RVPJ2-fnV9i3ycNW7-RjK3o",
    authDomain: "project-c-928e1.firebaseapp.com",
    projectId: "project-c-928e1",
    storageBucket: "project-c-928e1.appspot.com",
    messagingSenderId: "51281131638",
    appId: "1:51281131638:web:cae99cccaca67eeba78757",
    measurementId: "G-9TNDED3MGE"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export const firestore = firebase.firestore();
export const storage = firebase.storage();