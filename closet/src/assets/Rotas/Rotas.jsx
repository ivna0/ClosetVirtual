/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../components/Cadastro/Cadastro";
import Login from "../components/Login/Login";
import CdtProduto from "../components/CdtProduto/CdtProduto";
import Filtro from "../components/Filtro/Filtro";
import Home from "../components/Home/Home";
import Curtidas from "../components/Curtidas/Curtidas";
import Detalhes from "../components/DetalhesPdt/Detalhes";
import Vendas from "../components/Vendas/RelatorioV";
import Perfil from "../components/Perfil/Perfil"
import User from "../components/Usuario/RelatorioUser"


function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtro" element={<Filtro />} />
          <Route path="/curtidas" element={<Curtidas />} />
          <Route path="/detalhes" element={<Detalhes/>} />
          <Route path="/vendas" element={<Vendas/>} />
          <Route path="/cdtproduto" element={<CdtProduto/>} /> 
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rotas;
