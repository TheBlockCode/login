import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Inicio = () => {

    const notify = () => toast("Bienvenido ❤✔");
    
 

    return (
        notify(),
        toast.clearWaitingQueue(),
       <>
       
        <ToastContainer limit = {1}/>
       <h1>BIENVENIDO!!!</h1>
       
       </> 
    )

    

}