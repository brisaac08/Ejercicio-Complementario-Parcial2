import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import './Dashboard.css';

const Dashboard = () => {
  const { logOut } = useAuth();
  
  return (
    <div className='dashboard'>
      <nav className='dashboard-nav'>
        <ul>
          <li><Link to='/page1'>Enlace 1</Link></li>
          <li><Link to='/page2'>Enlace 2</Link></li>
          <li><Link to='/page3'>Enlace 3</Link></li>
          <li><Link to='/page4'>Enlace 4</Link></li>
        </ul>
        <button onClick={logOut}>Cerrar sesión</button>
      </nav>
      <div className='dashboard-content'>
        <h1>Bienvenido al Dashboard</h1>
        {/* Contenido de las páginas */}
      </div>
    </div>
  );
};

export default Dashboard;
