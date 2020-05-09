import firebase from "firebase/app";
import "@firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVaX8sqCgFkmsriYKcnmqVR-JynWfVKhg",
  authDomain: "marioplan-ec358.firebaseapp.com",
  databaseURL: "https://marioplan-ec358.firebaseio.com",
  projectId: "marioplan-ec358",
  storageBucket: "marioplan-ec358.appspot.com",
  messagingSenderId: "1079464298039"
};
firebase.initializeApp(config);

export default firebase;
