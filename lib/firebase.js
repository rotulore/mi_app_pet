import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Importa el módulo de autenticación
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyChGBDZM4F-QSYVMe_eoto2wHnSL6I7JD0",
  authDomain: "login-84ccc.firebaseapp.com",
  projectId: "login-84ccc",
  storageBucket: "login-84ccc.firebasestorage.app",
  messagingSenderId: "11947691150",
  appId: "1:11947691150:web:d256c8373a78710f550ddf",
  measurementId: "G-QKM2HGM3NK"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación
const auth = getAuth(app);

// Solo inicializar analytics en el cliente
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, analytics };
