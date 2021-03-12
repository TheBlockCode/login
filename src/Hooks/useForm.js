import { useState } from "react"

export const useForm = ( initialState = {} ) => {
   
    const [usuario, setUsuario] = useState(initialState)




    const handleInputChange = ({ target }) => {
        setUsuario({
            ...usuario,   
            [ target.usuario ]: target.usuario,
            [ target.password ]: target.password	
        });
    }

    return [ usuario, handleInputChange ];

}