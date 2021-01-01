import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAL53jTnorrWIreLo-PRFDg1wlzf7wE-8",
  authDomain: "triedandtrue-8e7b9.firebaseapp.com",
  databaseURL: "https://triedandtrue-8e7b9.firebaseio.com",
  projectId: "triedandtrue-8e7b9",
  storageBucket: "triedandtrue-8e7b9.appspot.com",
  messagingSenderId: "962475554284",
  appId: "1:962475554284:web:953db764b3acf188bdbcc9",
  measurementId: "G-1ZBZTV2MDG",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const cloudFn = firebase.functions().httpsCallable;
