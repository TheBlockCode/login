import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { chat } from './chat';

export const Inicio = () => {

    const notify = () => toast("Bienvenido ❤✔");
    
 
   
    return (
        notify(),
        toast.clearWaitingQueue(),
       <>
       
        <ToastContainer limit = {1}/>
       <h1>BIENVENIDO!!!</h1>

      <Link to="/chat" className = "btn btn-outline-primary">Ir al chat</Link>
       
       </> 
    )

    

}