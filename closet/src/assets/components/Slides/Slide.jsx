import style from "./Slide.module.css"
import React from 'react';
import blusa from '../../img/blusa.png'
import baixe from '../../img/baixeo.jpg'

function Slide () {
  return (
    <div className={style.catalogo}>

        <div className={style.espaço}></div>

            <button className={style.um}>Blusas</button>
            <button className={style.dois}>Calças</button>
            <button className={style.tres}>Calçados</button>
            <button className={style.quatro}>Infantil</button>
            <button className={style.cinco}>Vestidos</button>
            <button className={style.seis}>Jeans</button>
            <button className={style.sete}>Plus Size</button>

        <div className={style.container}>

            <div className={style.cards}>
                <img src={blusa}></img>
            <div className={style.cards2}></div>
            <div className={style.texts}>
              <h1>Cropped Vintage</h1>
              <h2>R$ 40,00</h2>
              <button>comprar</button>
            </div>
               
            </div>

            <div className={style.cards}>
                <img src={blusa}></img>
            <div className={style.cards2}></div> 
            <div className={style.texts}>
              <h1>Cropped Vintage</h1>
              <h2>R$ 40,00</h2>
              <button>comprar</button>
            </div>
            </div>

            <div className={style.cards}>
                <img src={blusa}></img>
            <div className={style.cards2}></div>
            <div className={style.texts}>
              <h1>Cropped Vintage</h1>
              <h2>R$ 40,00</h2>
              <button>comprar</button>
              </div>
            </div>

            <div className={style.cards}>
                <img src={blusa}></img>
            <div className={style.cards2}></div>
            <div className={style.texts}>
              <h1>Cropped Vintage</h1>
              <h2>R$ 40,00</h2>
              <button>comprar</button>
              </div>
            </div>

            <div className={style.cards}>
                <img src={blusa}></img>
            <div className={style.cards2}></div>
            <div className={style.texts}>
              <h1>Cropped Vintage</h1>
              <h2>R$ 40,00</h2>
              <button>comprar</button>
              </div>
            </div>

            <div className={style.cards}>
                <img src={blusa}></img>
            <div className={style.cards2}></div>
            <div className={style.texts}>
              <h1>Cropped Vintage</h1>
              <h2>R$ 40,00</h2>
              <button>comprar</button>
              </div>
            </div>
        </div>


        <div className={style.anuncio}>
          <div className={style.baixe}>
          <img src={baixe}></img>
          </div>
        </div>
    </div>
  )
}

export default Slide