import { Resguardante } from "./Resguardante.mjs";
import { list } from "./dependecies.mjs";

export class listaResguardante{
    addResguardante(nombre,marca,modelo,placas,fechaVecimiento,areaTrabajo){
     let resguardante = new Resguardante()
     resguardante.setNombre(nombre)
     resguardante.setMarca(marca)
     resguardante.setModelo(modelo)
     resguardante.setPlacas(placas)
     resguardante.setFechaVencimiento(fechaVecimiento)
     resguardante.setAreaTrabajo(areaTrabajo)
     list.push(resguardante)
    }

    seeResguardante(i){
        let resguardante= list.getElementAt(i);
        
        
        if(resguardante!=null){
            
            return resguardante;
        }
    }
    countResguardantes(){
        return list.size();
    }
}