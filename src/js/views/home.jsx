import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import { Characters } from "../component/cardCharacters.jsx";
import { Vehicle } from "../component/cardVehicle.jsx";
import { Planets } from "../component/cardPlanets.jsx";
import { Context } from "../store/appContext.js";



export const Home = () => {

	const {store} = useContext(Context);
	

	return(
		<div className="container">
			<div className="d-flex container mb-5" style={{overflowX: "scroll", height:"570px"}}>
  				<div className="d-flex flex-nowrap row row-cols-4">{store.personajes.map((cadaPersonaje, index)=><Characters key={index} id={index+1} nombre={cadaPersonaje.name} genero={cadaPersonaje.gender}/>)}
				</div>
			</div>
			<div className="d-flex container mb-5" style={{overflowX: "scroll", height:"410px"}}>
				<div className="d-flex flex-nowrap row row-cols-4">{store.vehiculos.map((cadaVehiculo, index)=><Vehicle key={index} id={index+1} nombre={cadaVehiculo.name} modelo={cadaVehiculo.model}/>)}
				</div>
			</div>
			<div className="d-flex container mb-5" style={{overflowX: "scroll", height:"500px"}}>
  				<div className="d-flex flex-nowrap row row-cols-4">{store.planetas.map((cadaPlaneta, index)=><Planets key={index} id={index+1} nombre={cadaPlaneta.name} terreno={cadaPlaneta.terrain}/>)}
				</div>
			</div>
		</div>
	);
}
