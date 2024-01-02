/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import style from './RelatorioUser.module.css';
import Nav from "../NavBarCliente/Nav";
import Footer from "../Footer/Footer";
import React, { useState } from 'react';

function RelatorioUser () {

    const TabelaDinamica = ({ dadosIniciais }) => {
        const [dados, setDados] = useState(dadosIniciais);
        const [ordenarPor, setOrdenarPor] = useState(null);
        const [ordemAscendente, setOrdemAscendente] = useState(true);
      
        const ordenarDados = (campo) => {
          const ordenacaoAscendente = ordemAscendente ? 1 : -1;
          const dadosOrdenados = [...dados].sort((a, b) => {
            if (a[campo] < b[campo]) {
              return -1 * ordenacaoAscendente;
            }
            if (a[campo] > b[campo]) {
              return 1 * ordenacaoAscendente;
            }
            return 0;
          });
      
          setOrdenarPor(campo);
          setOrdemAscendente(!ordemAscendente);
          setDados(dadosOrdenados);
        };
    };
    
    // const dados = [
    //     { user: 'lara6', email: 'lara6@gmail.com', status: 'ativo', compras: 3 },
    //     { user: 'bianca0', email: 'bianca@gmail.com', status: 'inativa', compras: 5 }
    // ];

    return(
        <div>
            <Nav/>
            <div className={style.Topo}>
            <button>Vendas</button>
            <button onClick={() => setDados(dadosIniciais)}>Usuários</button>
            </div>
            <table className={style.formulario}>
                <thead>
                    <tr>
                        <th onClick={() => ordenarDados('user')}>Usuário</th>
                        <th onClick={() => ordenarDados('email')}>Email</th>
                        <th onClick={() => ordenarDados('status')}>Status da conta</th>
                        <th onClick={() => ordenarDados('compras')}>Compras</th>
                    </tr>
                </thead>
                <tbody>
               
               {dados.map((item) => (
                    <tr key={item.user}>
                        <td>{item.user}</td>
                        <td>{item.email}</td>
                        <td>{item.status}</td>
                        <td>{item.compras}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
};


export default RelatorioUser;