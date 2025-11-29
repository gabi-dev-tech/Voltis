Todo List:
- Corre el siguiente comando:
npm install firebase

- Agregar esto a la APP:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrHdHP87W-sxHA0kxv2NkotPyEwHCuswg",
  authDomain: "voltis-8d73e.firebaseapp.com",
  projectId: "voltis-8d73e",
  storageBucket: "voltis-8d73e.firebasestorage.app",
  messagingSenderId: "956358110406",
  appId: "1:956358110406:web:3dbd419c2dca9006e8bbc7",
  measurementId: "G-28KQ2GSSQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

- Necesitas Firebase CLI (una herramienta de línea de comandos) para alojar tu sitio con Firebase Hosting:
npm install -g firebase-tools

- Realizar la implementaciónes:
firebase login
firebase init
firebase deploy