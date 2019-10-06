import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import SignIn from "../components/sign-in/sign-in.component";

const firebaseConfig = {
  apiKey: "AIzaSyBb5L67R5Ts0TcrSn7SWlDuFqFh7NY3Mw8",
  authDomain: "ecommapp-55174.firebaseapp.com",
  databaseURL: "https://ecommapp-55174.firebaseio.com",
  projectId: "ecommapp-55174",
  storageBucket: "",
  messagingSenderId: "812978909904",
  appId: "1:812978909904:web:98f6b54866bd6adba6e4d5",
  measurementId: "G-K5CEV2ENTT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
