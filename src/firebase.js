import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEhwp7g-aYNWVkklZX3ivQuOg-ra2EqQI",
    authDomain: "linkedin-clone-yt-9db4a.firebaseapp.com",
    projectId: "linkedin-clone-yt-9db4a",
    storageBucket: "linkedin-clone-yt-9db4a.appspot.com",
    messagingSenderId: "380087232865",
    appId: "1:380087232865:web:55cc11875421f427483d20"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };