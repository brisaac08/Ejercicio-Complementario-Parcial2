import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import Dashboard from './Dashboard';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;