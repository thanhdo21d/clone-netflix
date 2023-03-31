// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjnnd--w-aXETmUGfsMq4Ci5nLGeJ4MAg",
    authDomain: "react-netflix-clone-fef68.firebaseapp.com",
    projectId: "react-netflix-clone-fef68",
    storageBucket: "react-netflix-clone-fef68.appspot.com",
    messagingSenderId: "398531058317",
    appId: "1:398531058317:web:f4a5915072cc147e89e0c4",
    measurementId: "G-MYCLZWW99P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);