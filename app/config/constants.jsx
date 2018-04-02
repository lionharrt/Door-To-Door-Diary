import firebase from "firebase"

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD_NAhVA3Mydzg7en7K0uWSyvKU5T6M_F0",
  authDomain: "door-to-door-diary.firebaseapp.com",
  databaseURL: "https://door-to-door-diary.firebaseio.com",
  projectId: "door-to-door-diary",
  storageBucket: "door-to-door-diary.appspot.com",
  messagingSenderId: "644281003962"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth

