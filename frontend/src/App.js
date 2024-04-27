import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Routes
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />  {/* Renderiza la barra de navegación fuera de Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
