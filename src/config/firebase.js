import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "pomodoro-react-208.firebaseapp.com",
  projectId: "pomodoro-react-208",
  storageBucket: "pomodoro-react-208.appspot.com",
  messagingSenderId: "300082424112",
  appId: "1:300082424112:web:0452cffcd36f12dac6c0f5",
  measurementId: "G-D8P74Y4LJL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);