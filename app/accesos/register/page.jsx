'use client'; // Asegúrate de ejecutar este componente en el cliente

// Importar las funciones necesarias de Firebase
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Para crear un nuevo usuario
import { auth } from '/lib/firebase'; // Importar la instancia de autenticación desde firebase.js
import { useRouter } from 'next/navigation'; // Para redirigir después del registro

export default function RegisterPage() {
  // Estados para el correo electrónico, la contraseña, la confirmación de contraseña y el error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Usamos el hook useRouter para redirigir después del registro
  const router = useRouter();

  // Función para manejar el registro del usuario
  const handleRegister = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Crear un nuevo usuario en Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado correctamente');

      // Redirigir al usuario a la página de inicio de sesión o inicio
      router.push('/accesos/login'); // Redirige al login después de un registro exitoso
    } catch (err) {
      // Si hay un error, muestra el mensaje de error
      setError('Error al registrarse: ' + err.message);
    }
  };

  return (
    <div className="register-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh' }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Crear cuenta</h2>
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block' }}>Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Escribe tu correo" 
              style={{ width: '93%', padding: '8px', marginTop: '5px' }} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ display: 'block' }}>Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Crea una contraseña" 
              style={{ width: '93%', padding: '8px', marginTop: '5px' }} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block' }}>Confirmar contraseña</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirma tu contraseña" 
              style={{ width: '93%', padding: '8px', marginTop: '5px' }} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#634AFF', color: 'white', border: 'none', borderRadius: '4px' }}>
            Registrarse
          </button>
        </form>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Mostrar el error si existe */}
      </div>
    </div>
  );
}
