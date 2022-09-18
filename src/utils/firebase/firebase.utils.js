import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcKjrA0p6qvpbQQVdU27YiP4RxjetOtM",
  authDomain: "crwn-clothing-db-a4fd6.firebaseapp.com",
  projectId: "crwn-clothing-db-a4fd6",
  storageBucket: "crwn-clothing-db-a4fd6.appspot.com",
  messagingSenderId: "194382785819",
  appId: "1:194382785819:web:e622ccd57568fd582bf7be"
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);