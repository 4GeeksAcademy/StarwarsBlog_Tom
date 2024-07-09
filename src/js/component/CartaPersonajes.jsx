import React, { useContext, useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext"


export const CartaPersonajes = ({ name, id }) => {

  const { store, actions } = useContext(Context);
  const [caracteristica, setCaracteristica] = useState(null)
  const {uid} = useParams() //desestructura del id

  useEffect(() => {
    const detalles = async () => {
      const data = await actions.obtenerPersonaje(uid);
      console.log(uid);
      setCaracteristica(data?.result.properties);
    };
    uid ? detalles(): null //preguntamos si uid tiene algo que nos saque los detalles
  }, []);

  if (!caracteristica) {
    return <div>Loading...</div>;
  }


  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{caracteristica.name}</li>
        <li className="list-group-item">{caracteristica.hair_color}</li>
        <li className="list-group-item">{caracteristica.eye_color}</li>
      </ul>
      <div className="card-body">
        <Link className="btn btn-primary" to={'/' + id}>Learn More</Link>
        <i class="bi bi-suit-heart"></i>
      </div>
    </div>

  );
};