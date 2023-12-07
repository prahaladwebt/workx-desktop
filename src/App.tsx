import React from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WorkXApp from './pages/WorkXApp';
import Login from './pages/Login/Login';

const App: React.FC = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/*' element={<WorkXApp />} />
      <Route path='login' element={<Login />} />
    </Routes>
  </BrowserRouter>
};

export default App;
