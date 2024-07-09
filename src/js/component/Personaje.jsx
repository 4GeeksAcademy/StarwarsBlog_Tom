import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const Personaje = () => {  //no le pasamos nada porque lo estamos haciendo con el useParams, desestructuramos la url por la que se accede al componente. 

    const { store, actions } = useContext(Context);
    const [caracteristicas, setCaracteristicas] = useState(null)
    const { uid } = useParams() //desestructura del id en la url.





    useEffect(() => {
        const detalles = async () => {
            const data = await actions.obtenerPersonaje(uid);
            console.log(uid);
            setCaracteristicas(data?.result);
        };

        detalles(); //llamamos a la función creada con el useEfect para que se ejecute. 
    }, [uid]); //tenemos que llamar a la función cada vez que cambie el uid del personaje. 

    if (!caracteristicas) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container-fluid">
            
            <div className="row">
                <div className="col">
                    imagen
                </div>
                <div className="col">
                    {caracteristicas.description}
                </div>
            </div>
            
            <div className="row">
                <div className="col">{caracteristicas.properties.name}
                </div>
                <div className="col">{caracteristicas.properties.mass}
                </div>
                <div className="col">{caracteristicas.properties.birth_year}
                </div>
                <div className="col">{caracteristicas.properties.height}
                </div>
            </div>
        </div >


    );

};
