/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import style from "./Class.module.css";
import Regata from '../../img/regata.jpg'
import { IoMdStar, IoMdStarOutline } from "react-icons/io"; //estrela preenchida
import { IoIosStarOutline } from "react-icons/io"; //estrela 
import react, { useState } from "react";
import { IoTrashBin } from "react-icons/io5"; //lixeira
import { HiOutlinePencilAlt } from "react-icons/hi"; //editar
import { RiSendPlaneFill } from "react-icons/ri"; //enviar
import { TextArea } from "../TextArea/TextArea";

function NovoComentario(){
  const [comentarios, setComentarios] = useState([
    { id: 1, estrelas: 5, texto: 'Anonimo: Adorei' },
    { id: 2, estrelas: 4, texto: 'Anonimo: Gostei bastante' },
  ]);

  const [novoComentario, setNovoComentario] = useState({
    estrelas: 0,
    texto: '',
  });

  const [selectedStar, setSelectedStar] = useState(0);

  const handleClickStar = (comentarioID, starValue) => {
   setComentarios((prevComentarios) => prevComentarios.map((comentario) => {
    if (comentario.id === comentarioID) {
      return {...comentario, estrelas: starValue};
      // if (selectedStar === starValue) {
      //   setSelectedStar(0);
      // } else {
      //   setSelectedStar(starValue);
      // }
    }
    return comentario;
   }));
    
  };

  const renderSelectedStar = (starValue) => {
    return selectedStar >= starValue ? <IoMdStar /> : <IoIosStarOutline />;
  };

  const handleEditarComentario = (comentarioId, newTexto) => {
    setComentarios((prevComentarios) => prevComentarios.map((comentario) => {
      if ( comentario.id === comentarioId) {
        return { ...comentario, texto: newTexto};
      }
      return comentario;
    }));
  };

  const handleExcluirComentario = (comentarioId) => {
    setComentarios((prevComentarios) => prevComentarios.filter((comentario) => comentario.id !== comentarioId));
  };

  const handleEnviarComentario = () => {
  if ( novoComentario.trim() !== ''){
    const novoComentarioObj = {
      id: comentarios.length + 1,
      estrelas: 0,
      texto: novoComentario,
    };
    setComentarios((prevComentarios) => [...prevComentarios, novoComentarioObj]);
    setNovoComentario('');
  };
  };

  return (
    <>
      <div className={style.Container}>

        <div className={style.titulo}>
          <h1>Comentários</h1>
        </div>

        <div className={style.avaliacoes}>
          {comentarios.map((comentario) => (
            <div key={comentario.id} className={style.comentario}>

              <img className={style.produto} src={Regata}></img>
                <div className={style.avaliar}>
                  <div className={style.estrelaPront}>
                  {[1, 2, 3, 4, 5].map((starValue) => (
                  <div key={starValue} onClick={() => handleClickStar(comentario.id, starValue)}>
                    {starValue <= comentario.estrelas ? <IoMdStar /> : <IoMdStarOutline />}</div>
                  ))}
                  </div>
                  <div>
                  <div value={comentario.texto} className={style.textArea} />
                  </div>
                </div>
            </div>
          ))}

            <div className={style.comente}>
              <img className={style.imgComent} src={Regata}></img>
              <div className={style.starComent}>
                <div className={style.estrela}>
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <div key={starValue} onClick={() => handleClickStar(-1, starValue)}>
                      { starValue <= novoComentario.estrelas ? <IoMdStar/> : <IoMdStarOutline/>}
                    </div>
                  ))}
                </div>
                  <div className={style.icones}>
                    <icon className={style.Editar}><HiOutlinePencilAlt onClick={() => handleEditarComentario(-1, novoComentario )} /></icon>
                    <icon className={style.Lixeira}><IoTrashBin onClick={() => handleExcluirComentario(comentarios.id)}/></icon>
                    <icon className={style.Enviar}><RiSendPlaneFill onClick={handleEnviarComentario}/></icon>
                  </div>
                
  
                <div className={style.comentario}>
                  <textarea
                  value={novoComentario}
                  onChange={(e) => setNovoComentario(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  rows="10"></textarea>
                </div>
              </div>
            </div> 
        </div>
              <div className={style.enviarResp}>
                <button className={style.bntAvaliar} onClick={handleEnviarComentario}>Avaliar</button>
              </div>
      </div>
    </>
  );
}


export default NovoComentario;