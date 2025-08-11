import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Replace these with your actual Firebase project credentials
// You can find these in your Firebase Console > Project Settings > General > Your apps
const apiKey = "your_api_key_here";
const authDomain = "learnlingo-9cc3.firebaseapp.com";
const databaseURL = "https://learnlingo-9cc3-default-rtdb.firebaseio.com";
const projectId = "learnlingo-9cc3";
const storageBucket = "learnlingo-9cc3.appspot.com";
const messagingSenderId = "your_messaging_sender_id_here";
const appId = "your_app_id_here";
const measurementId = "your_measurement_id_here";

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, auth, database };
