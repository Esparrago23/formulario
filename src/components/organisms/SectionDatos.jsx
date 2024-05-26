import InfoGuardada from "../molecules/InfoGuardada";
import './SectionDatos.css'
import { ListaResguardantes } from "../../data/dependecies.mjs";
import mysql from "../../data/mysql";
import Swal from "sweetalert2";
import Button from "../atoms/Button";
import { useState } from "react";

let i=-1


function SectionDatos() {
    let persona1 ={ name: "",marca:"",modelo:"",placas:"",fecha:"",areaTrabajo:"" }
    let [resguardante,setvalue]= useState (persona1)
    let patata;
    
    
    function printClick(){
        i++; 
        console.log(i)
        console.log(i+" = "+ListaResguardantes.countResguardantes())
    patata=ListaResguardantes.seeResguardante(i);
    resguardante =patata
    setvalue(prevState => ({...prevState,name: `${resguardante.getNombre()}`,marca:`${resguardante.getMarca()}`,modelo:`${resguardante.getModelo()}`,placas:`${resguardante.getPlacas()}`,fecha:`${resguardante.getFechaVencimiento()}`,areaTrabajo:`${resguardante.getAreaTrabajo()}` }))
    }

    return (
        <div id="datos_section">
           <Button title="Mostrar informacion" onclick={printClick}/>
           {console.log(resguardante+"aguacte")}
           <InfoGuardada text={`Nombre: ${resguardante.name}`} />   
           <InfoGuardada text={`Marca: ${resguardante.marca}`} />   
           <InfoGuardada text={`Modelo: ${resguardante.modelo}`} />   
           <InfoGuardada text={`Placas: ${resguardante.placas}`} />   
           <InfoGuardada text={`Fecha: ${resguardante.fecha}`} />   
           <InfoGuardada text={`Area de trabajo: ${resguardante.areaTrabajo}`} />   
        </div>
    );
}

export default SectionDatos;
/*
{
    mysql.datos.map(datos =><InfoGuardada text={datos.text}></InfoGuardada>)
}*/