import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJFiGElnEbpZo7_Bp8mPI-Kp_glYmfDB0",
  authDomain: "vente-en-ligne-5388c.firebaseapp.com",
  projectId: "vente-en-ligne-5388c",
  storageBucket: "vente-en-ligne-5388c.firebasestorage.app",
  messagingSenderId: "1044747983298",
  appId: "1:1044747983298:web:79a9be354ac3d0cb229e5b",
  measurementId: "G-XBP2WEVHEC"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
