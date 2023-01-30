import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";



export const ViewCharacters = () => {
  const params = useParams();
  const {store, actions} = useContext(Context);

  useEffect(()=>{
    actions.obtenerDetalleDePersonaje(params.theid);
},[])
  
return(
  <div className="overflow">
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-md">
          <img src={"https://starwars-visualguide.com/assets/img/characters/"+(params.theid)+".jpg"}
 style={{ width:"800px", height: "600px" }} className="img-fluid rounded-start"  alt="..."/>
        </div>
        <div className="col-md">
          <div className="card-body p-3 m-3">
            <h3 className="card-title">{store.detallePersonaje.name}</h3>
            <br/>
            <p className="card-text">Height: {store.detallePersonaje.height}</p>
            <p className="card-text">Mass: {store.detallePersonaje.mass}</p>
            <p className="card-text">Hair color: {store.detallePersonaje.hair_color}</p>
            <p className="card-text">Skin color: {store.detallePersonaje.skin_color}</p>
            <p className="card-text">Eye color: {store.detallePersonaje.eye_color}</p>
            <p className="card-text">Birth year: {store.detallePersonaje.birth_year}</p>
            <p className="card-text">Gender: {store.detallePersonaje.gender}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)};
