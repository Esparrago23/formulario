import { useState } from "react";

import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import './SectionLogin.css'
import { ListaResguardantes } from "../../data/dependecies.mjs";



function SectionLogin() {
  
  

  const [username,setUsername] = useState('')
  const [marca,setMarca] = useState('')
  const [modelo,setModelo] = useState('')
  const [placas,setPlacas] = useState('')
  const [fecha,setfecha] = useState('')
  const [areaTrabajo,setAreaTrabajo] = useState('')
  
    const handlerClickExit=(event) =>{
      Swal.fire({
      title: "Se ha guardado con exito",
      
      
    })
    ListaResguardantes.addResguardante(username,marca,modelo,placas,fecha,areaTrabajo);
    
  }
    
    return (
        <div id="login_section">
            <Field type="text" placeholder="p.e. christian" text="Nombre del resguardante" val={username} fnval={setUsername}/>
            <Field type="text" placeholder="" text="Marca" val={marca} fnval={setMarca}/>
            <Field type="text" placeholder="" text="Modelo" val={modelo} fnval={setModelo}/>
            <Field type="text" placeholder="" text="Placas" val={placas} fnval={setPlacas}/>
            <Field type="date" placeholder="DD/MM/AAAA" text="Fecha de vencimiento de la licencia de manejo" val={fecha} fnval={setfecha}/>
            <Field type="text" placeholder="" text="Area de trabajo "val={areaTrabajo} fnval={setAreaTrabajo}/>
            <Button title="Guardar informacion" onclick={handlerClickExit}/>
        </div> 
     );
     

}




export default SectionLogin;


/*const handlerClick=(event) =>{
      
        /*Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below 
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    };*/

/*
<Label text="TIPO DE AUTO" />
<div id="checkbox">
<Field type="checkbox" placeholder="Automoviles, Diesel, Motocicleta" />
<Label text="Automovil" />
<Field type="checkbox" placeholder="Automoviles, Diesel, Motocicleta" />
<Label text="Diesel" />
<Field type="checkbox" placeholder="Automoviles, Diesel, Motocicleta"/>
<Label text="Motocicleta" />
</div>

<Field type="text" placeholder="" text="Modelo"/>
            <Field type="text" placeholder="" text="Placas"/>
            <Field type="date" placeholder="DD/MM/AAAA" text="Fecha de vencimiento de la licencia de manejo"/>
            <Field type="text" placeholder="" text="Area de trabajo"/>
            */