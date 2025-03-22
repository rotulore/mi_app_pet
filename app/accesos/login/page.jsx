// "use client" indica que este archivo debe ejecutarse en el cliente
'use client'; 

// Importar las funciones necesarias de Firebase
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/lib/firebase';  // Importa la instancia de autenticación desde firebase.js
import { useRouter } from 'next/navigation'; // Importar el hook useRouter de Next.js

export default function LoginPage() {
  // Estados para email, contraseña, error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Usamos useRouter para redirigir al usuario después de un login exitoso
  const router = useRouter();

  // Maneja el envío del formulario de login
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que el formulario se recargue
    try {
      // Intenta iniciar sesión con Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario logueado correctamente');
      
      // Redirigir al usuario a otra página (ejemplo: /home) después de iniciar sesión correctamente
      router.push('/');  // Redirige a la página de inicio
      
    } catch (err) {
      // Si hay un error, muestra el mensaje de error
      setError('Error al iniciar sesión: ' + err.message);
    }
  };

  return (
    <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block' }}>Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Escribe tu correo" 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ display: 'block' }}>Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Escribe tu contraseña" 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '4px' }}>
            Iniciar sesión
          </button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Muestra el error si existe */}
      </div>
    </div>
  );
}
