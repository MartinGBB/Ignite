import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHfz_S7S7pueFlI97gqOJcH7fP5loTBJ8",
  authDomain: "blog-ignite.firebaseapp.com",
  projectId: "blog-ignite",
  storageBucket: "blog-ignite.appspot.com",
  messagingSenderId: "597608127974",
  appId: "1:597608127974:web:8915f2ee3fd2c7e37e4a27"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)