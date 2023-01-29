import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBW-Xfh027zyz3zHgqKpSTTVhQ-_2sHyic",
    authDomain: "eride-f8827.firebaseapp.com",
    databaseURL: "https://eride-f8827-default-rtdb.firebaseio.com",
    projectId: "eride-f8827",
    storageBucket: "eride-f8827.appspot.com",
    messagingSenderId: "105598914930",
    appId: "1:105598914930:web:fd6b1c5b2637a11c810deb",
    measurementId: "G-KMVNXJWS1W"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
