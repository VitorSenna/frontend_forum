import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './componentes/paginas/Login';
import CadastroPessoa from './componentes/paginas/CadastroPessoa';
import CadastroIdeia from './componentes/paginas/CadastroIdeia';
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<CadastroPessoa />} />
      <Route path="/register/ideia" element={<CadastroIdeia />} />
    </Routes>
  </BrowserRouter>

);
