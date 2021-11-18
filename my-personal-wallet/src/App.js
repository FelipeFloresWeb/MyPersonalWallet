import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Create from './pages/Create/Create';
import Main from './pages/Main/Main';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
