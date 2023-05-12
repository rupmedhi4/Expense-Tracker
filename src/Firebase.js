
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa3-PUeOmeucZBCBRfL3qHqQuvEjj9XuU",
  authDomain: "expense-tracker2-866e6.firebaseapp.com",
  projectId: "expense-tracker2-866e6",
  storageBucket: "expense-tracker2-866e6.appspot.com",
  messagingSenderId: "180918672745",
  appId: "1:180918672745:web:4f9eea2597b96be95331f8",
  measurementId: "G-CJ2L5ERNWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;