import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Zb4Cf1eRfveCvYG_KIFweIUs0kxp-co",
  authDomain: "studymate-7d758.firebaseapp.com",
  projectId: "studymate-7d758",
  storageBucket: "studymate-7d758.firebasestorage.app",
  messagingSenderId: "312257182186",
  appId: "1:312257182186:web:88ce7138d60bf18f2dda93",
  measurementId: "G-DWG1BQKW70",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
