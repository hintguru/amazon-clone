import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH7uVdmDSWGnGIeNs1ARu3TI7xL-h1qsE",
  authDomain: "clone-b892a.firebaseapp.com",
  projectId: "clone-b892a",
  storageBucket: "clone-b892a.appspot.com",
  messagingSenderId: "858979543699",
  appId: "1:858979543699:web:55dbb1581a519b30583b66",
  measurementId: "G-2R4KH1YY7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
