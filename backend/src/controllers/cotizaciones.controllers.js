import { methodHTTP } from "./constructuras.controllers";

const getCotizacion = (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodHTTP = {
    getCotizacion
};