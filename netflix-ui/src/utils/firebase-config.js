import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRLLLz3hQlk4xf5WTYNFdcfvD5zLY5mcE",
  authDomain: "react-netflix-clone-a07c9.firebaseapp.com",
  projectId: "react-netflix-clone-a07c9",
  storageBucket: "react-netflix-clone-a07c9.appspot.com",
  messagingSenderId: "830449420403",
  appId: "1:830449420403:web:b6893def95fc9b82d4c206",
  measurementId: "G-8RLEEWVQKZ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);