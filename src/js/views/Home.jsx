import React, { act, useContext, useEffect, useState } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CartaPersonajes } from "../component/CartaPersonajes.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context);

		const validacionPersonajes = store.personajes; //properties porque es lo que viene definido en la API
		console.log(("lista de personajes: ", validacionPersonajes));
	return (

		<div className="text-center mt-5">
			<h1 className="link-danger">Characters</h1>
			<div className="container"> 
				{store.personajes?.map(elemento => <CartaPersonajes key={elemento.uid} name= {elemento.name}   id={elemento.uid}/>)}
			</div>
		</div>
	);
}



