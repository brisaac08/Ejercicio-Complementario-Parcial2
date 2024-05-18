import { useState } from 'react';
import { useAuth } from './AuthProvider';
import './Login.css';

export function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [mensaje, setMensaje] = useState('');

  const auth = useAuth();

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== '' && input.password !== '') {
      try {
        auth.loginAction(input);
      } catch (error) {
        setMensaje(error.message);
      }
    } else {
      alert('El usuario y la contraseña son obligatorios');
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='body-login'>
      <header className='header-login'>
        <img src='/logo.png' alt='logo' className='login-logo' />
      </header>
      <form className='main-login' onSubmit={handleSubmitEvent}>
        <div className='login-container'>
          <h2>Inicia sesión</h2>
          <div className='login-inputs'>
            <input
              type='text'
              placeholder='Email'
              id='username'
              name='username'
              onChange={handleInput}
              required
            />
            <input
              type='password'
              placeholder='Contraseña'
              id='password'
              name='password'
              onChange={handleInput}
              required
            />
            <button className='btn-iniciar-sesion'>Iniciar sesión</button>
            <a href='#'>¿Olvidaste la contraseña?</a>
          </div>
          <div className='recuerdame'>
            <input type='checkbox' name='remember' id='remember' />
            <p>Recuérdame</p>
          </div>
        </div>
      </form>
      {mensaje && <p className='error-message'>{mensaje}</p>}
      <footer className='footer-login'>
        {/* Footer Content */}
      </footer>
    </div>
  );
}
