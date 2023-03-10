import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf3BhZKvqIaUwOHRnqgm89qUbuoklcLrM",
  authDomain: "bitbybite-dotxyz.firebaseapp.com",
  projectId: "bitbybite-dotxyz",
  storageBucket: "bitbybite-dotxyz.appspot.com",
  messagingSenderId: "338156763075",
  appId: "1:338156763075:web:ac90aa05e780dff75cef76",
  measurementId: "G-2CBQ7H8ZNC",
};

export const fbapp = initializeApp(firebaseConfig);
export const storage = getStorage(fbapp);
export const database = getFirestore(fbapp);
