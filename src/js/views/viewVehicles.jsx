import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";

export const ViewVehicles = () => {
  const {store,actions} = useContext(Context);
  const params = useParams();


    useEffect(()=>{
      actions.obtenerDetalleDeVehiculo(params.theid);
    },[])

return (
  <div>
	<div className="card mb-3 border-0">
  <div className="row g-0">
    <div className="col-md">
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(params.theid)+".jpg"}
 style={{ width:"800px", height: "600px" }} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md">
      <div className="card-body  p-3 m-3">
        <h3 className="card-title">{store.detalleVehiculo.name}</h3>
        <br/>
        <p className="card-text">Modelo: {store.detalleVehiculo.model}</p>
        <p className="card-text">Manufacturer: {store.detalleVehiculo.manufacturer}</p>
        <p className="card-text">Cost in credits: {store.detalleVehiculo.cost_in_credits}</p>
        <p className="card-text">Length: {store.detalleVehiculo.length}</p>
        <p className="card-text">Max atmosphering speed: {store.detalleVehiculo.max_atmosphering_speed}</p>
        <p className="card-text">Crew: {store.detalleVehiculo.crew}</p>
        <p className="card-text">Passengers: {store.detalleVehiculo.passengers}</p>
        <p className="card-text">Cargo capacity: {store.detalleVehiculo.cargo_capacity}</p>
        <p className="card-text">Consumables: {store.detalleVehiculo.consumables}</p>
        <p className="card-text">Vehicle class: {store.detalleVehiculo.vehicle_class}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  );}