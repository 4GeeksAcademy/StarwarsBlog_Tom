import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"


export const CartaPersonajes = ({ name, id }) => {

  const { store, actions } = useContext(Context);
  const [caracteristica, setCaracteristica] = useState(null)

  useEffect(() => {
    const detalles = async () => {
      const data = await actions.obtenerPersonaje(id);
      console.log(id);
      setCaracteristica(data?.result.properties);
    };
    detalles();
  }, [id]);

  if (!caracteristica) {
    return <div>Loading...</div>;
  }




  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {/* Se obtiene el atributo "properties" que nos devuelve la llamada al servicio de "obtenerPersonaje" y este atributo
        es un objeto con las caracterísiticas de cada personaje. Dentro de cada li pintamos la caracteristica
        que nos interesa  */}
        <li className="list-group-item">Gender: {caracteristica.gender}</li>
        <li className="list-group-item">Hair color: {caracteristica.hair_color}</li>
        <li className="list-group-item">Eye color: {caracteristica.eye_color}</li>
      </ul>
      <div className="card-body">
        <Link className="btn btn-primary" to={'/' + id}>Learn More</Link>
        <i className='far fa-heart' style={{fontSize:'48px', color:'red'}}></i>
      </div>
    </div>

  );
};