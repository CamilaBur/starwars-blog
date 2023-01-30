import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = ({nombre, modelo, id}) => {
  const {actions} = useContext(Context)


	return (
			<div className="card d-flex mx-3 my-3" style={{width: "18rem", height:"22rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(id)+".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-title">{modelo}</p>
    
    <Link to={"/viewVehicles/"+id} className="btn btn-primary">Mas info!</Link>
    <button className="btn text-danger" onClick={()=>actions.agregarFavorito(nombre)}><i className="fa fa-heart"> </i></button>
  </div>
</div>
	);
};