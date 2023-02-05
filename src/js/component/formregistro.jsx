import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";


export const Registro = () => {


  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[nombre,setNombre]=useState("")
  const {store, actions}=useContext(Context)


  function enviarDatos(e) {
   e.preventDefault()
   actions.signup(email,password,nombre)


   setEmail("")
   setPassword("")
   setNombre("")
  }


 return (
   <>
   {store.auth === true ? <Navigate to="/login"/>:
   <form className="w-50 mx-auto" onSubmit={enviarDatos}>
     <div className="mb-3 container">
       <label htmlFor="exampleInputEmail1" className="form-label">
         Email address
       </label>
       <input
         type="email"
         className="form-control"
         id="exampleInputEmail1"
         aria-describedby="emailHelp"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
       />
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1" className="form-label">
         Password
       </label>
       <input
         type="password"
         className="form-control"
         id="exampleInputPassword1"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
       />
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputNombre1" className="form-label">
       Nombre
       </label>
       <input
         type="text"
         className="form-control"
         id="exampleInputNombre1"
         value={nombre}
         onChange={(e)=>setNombre(e.target.value)}
       />
     </div>
     <button type="submit" className="btn btn-primary">
       Submit
     </button>
   </form>}
   </>
   
 );
};


export default Registro;
