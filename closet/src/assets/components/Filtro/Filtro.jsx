/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from 'react';
import style from "./Filtro.module.css";
import Nav from "../NavBarCliente/Nav";
import friday from "../../img/friday.png"
import Produto from "../Produtos/Produto";
import Footer from "../Footer/Footer";

function Filtro (){

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleRadioChange = (value) => {
  //   if (selectedOption === value) {
  //     // Se a opção já estiver selecionada, desmarque-a
  //     setSelectedOption(null);
  //   } else {
  //     // Se não, selecione a opção
  //     setSelectedOption(value);
  //   }
  //   }

  return (

    <div>
      <Nav />
      <div className={style.Anuncio}><img src={friday}></img></div>
      <div className={style.containerPage}>

      <div className={style.Container}>
          <h1>Filtro</h1>
        <div className={style.texts}>
          <h2>Categoria</h2>
        <div className={style.Categorias}>

      <div className={style.categore}>
        <input type="radio"
        //  name="option"
        //  value="option1"
         id="Infantil" 
        //  checked={selectedOption === 'option1'}
        // onChange={() => handleRadioChange('option1')} 
        >
        </input>
        <label for="Infantil">Infantil</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='Masculino'></input>
        <label for='Masculino'>Masculino</label>
        </div>

      <div className={style.categore}>
        <input type='radio' id='Feminino'></input>
        <label for='Feminino'>Feminino</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='PlusSize'></input>
        <label for='PlusSize'>PlusSize</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='Vintage'></input>
        <label for='Vintage'>vintage</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='Lingerie'></input>
        <label for='Lingerie'>Lingerie</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='Esportivo'></input>
        <label for='Esportivo'>Esportivo</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='Jeans'></input>
        <label for='Jeans'>Jeans</label>
      </div>

      <div className={style.categore}>
        <input type='radio' id='Casual'></input>
        <label for='Casual'>Casual</label>
      </div>
    </div>

      <div className={style.Pdt}>
        <h2>Produtos</h2>

      <div className={style.produtos}>
      <div className={style.produto}>
        <input type='radio' id='Blusas'></input>
        <label for='Blusas'>Blusas</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Calça'></input>
        <label for='Calça'>Calça</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Vestido'></input>
        <label for='Vestido'>Vestido</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Sandália'></input>
        <label for='Sandália'>Sandália</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Short'></input>
        <label for='Short'>Short</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Tẽnis'></input>
        <label for='Tẽnis'>Tẽnis</label>
        </div>
        
        <div className={style.produto}>
        <input type='radio' id='Regata'></input>
        <label for='Regata'>Regata</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Meia'></input>
        <label for='Meia'>Meia</label>
        </div>

        <div className={style.produto}>
        <input type='radio' id='Lingerie'></input>
        <label for='Lingerie'>Lingerie</label>
        </div>

      </div>
      </div>
    <div className={style.Tamanho}>
      <h2>Tamanho</h2>

    <div className={style.tamanhos}>
    <div className={style.tamanho}>
        <input type='radio' id='PP'></input>
        <label for='PP'>PP</label></div>

        <div className={style.tamanho}>
        <input type='radio' id='P'></input>
        <label for='P'>P</label></div>

        <div className={style.tamanho}>
        <input type='radio' id='M'></input>
        <label for='M'>M</label></div>

        <div className={style.tamanho}>
        <input type='radio' id='G'></input>
        <label for='G'>G</label></div>

        <div className={style.tamanho}>
        <input type='radio' id='GG'></input>
        <label for='G'>G</label></div>
    </div>
    </div>

    <div className={style.Preço}>
      <h2>Preço</h2>

      <div className={style.preços}>
        <button>R$ 0 á 20</button>
        <button>R$ 20 á 50</button>
        <button>R$ 50 á 80</button>
        <button> + R$ 80</button>
      </div>
    </div>
      </div>
    </div>

    <Produto/>
    </div>
    <Footer/>
    </div>
  );
}

export default Filtro;
