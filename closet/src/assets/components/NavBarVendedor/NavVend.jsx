/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import style from "./NavBarVendedor.module.css";
import logo from "../../assets/image/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiViewGridAdd } from "react-icons/hi"; //adicionar pdt
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Perfil from "../Perfil/Perfil";

function NavVend() {
  //barra de pesquisa
  const location = useLocation();
  const [componenteVisivel, setComponenteVisivel] = useState(false);

  useEffect(() => {
    // Verifique se a localização atual é "/filtro"
    if (location.pathname === '/filtro') {
      setComponenteVisivel(true);
    } else {
      setComponenteVisivel(false);
    }
  }, [location.pathname]);

  const toggleSearchField = () => {
    setComponenteVisivel(!componenteVisivel);
  };

  //opções
  const [opçoes, setOpçoes] = useState(false);

  const toggleOptions = () => {
    setOpçoes(!opçoes);
  };

  const [perfil, setPerfil] = useState (false);

  const togglePerfil = () => {
    setPerfil(!perfil);
    setOpçoes(!opçoes)
  }


  return (
    <header className={style.header}>
      <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo}></img>
        </div>
        <div className={style.navList}>
          <ul>
            {componenteVisivel && (
              <div className={style.inputPesquisa}>
                <input type="text" placeholder="Pesquisar produto" />
              </div>
            )}

            {opçoes && (
              <div className={style.dropdown}>
                <div className={style.active}>
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/vendas">Relatório</Link></li>
                    <li><a onClick={togglePerfil}>Perfil</a></li>
                    <li><Link to="/cdtproduto">Cadastrar Produto</Link></li>
                  </ul>
                </div>
              </div>
            )}

            {perfil && (
              <Perfil togglePerfil={togglePerfil} />
            )}

            <li className={style.item}>
              <a href="#" onClick={toggleSearchField}>
                <FaSearch />
              </a>
            </li>
            <li className={style.item}>
              <a href="#" onClick={toggleOptions}>
                <IoPersonCircleSharp />
              </a>
            </li>
            <li className={style.item}>
              <a href="#">
                <HiViewGridAdd/> 
              </a> 
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavVend;