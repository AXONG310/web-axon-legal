// Importa las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyD34AA91FnRBGy8QAYI3ZGYYnIIaYUJgK",
  authDomain: "tidy-bounty-512402-n2-17669.firebaseapp.com",
  projectId: "tidy-bounty-512402-n2-17669",
  storageBucket: "tidy-bounty-512402-n2-17669.firebasestorage.app",
  messagingSenderId: "436199106618",
  appId: "1:436199106618:web:f2988f4fae541b25076d03",
  measurementId: "G-5N1K1956Q1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
