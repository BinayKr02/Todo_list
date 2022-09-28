import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCwMSIICK19D2u8jsLSazkuNuBEAUny3oU",
  authDomain: "todo-app-ff118.firebaseapp.com",
  databaseURL: "https://todo-app-ff118-default-rtdb.firebaseio.com",
  projectId: "todo-app-ff118",
  storageBucket: "todo-app-ff118.appspot.com",
  messagingSenderId: "1001414801780",
  appId: "1:1001414801780:web:83526bd95ad9c455971421",
  measurementId: "G-CBB8XTTDXC"
});

const db = firebaseApp.firestore();

export { db };  