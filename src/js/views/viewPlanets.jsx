import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";



export const ViewPlanets = () => {
  const {store, actions} = useContext(Context);
  const params = useParams();

  useEffect(()=>{
    actions.obtenerDetalleDePlaneta(params.theid);
},[])
  
  return(
  <div>
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-md">
          <img src={"https://starwars-visualguide.com/assets/img/planets/"+(params.theid)+".jpg"}
 style={{ width:"800px", height: "600px" }} className="img-fluid rounded-start"  alt="..."/>
        </div>
        <div className="col-md">
          <div className="card-body p-3 m-3">
            <h3 className="card-title">{store.detallePlaneta.name}</h3>
            <br/>
            <p className="card-text">Rotation period: {store.detallePlaneta.rotation_period}</p>
            <p className="card-text">Orbital period: {store.detallePlaneta.orbital_period}</p>
            <p className="card-text">Diameter: {store.detallePlaneta.diameter}</p>
            <p className="card-text">Climate: {store.detallePlaneta.climate}</p>
            <p className="card-text">Gravity: {store.detallePlaneta.gravity}</p>
            <p className="card-text">Terrain: {store.detallePlaneta.terrain}</p>
            <p className="card-text">Surface water: {store.detallePlaneta.surface_water}</p>
            <p className="card-text">Population: {store.detallePlaneta.population}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
  </div>
</div>
)};