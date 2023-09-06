import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Formulario({ nombre }) {
  const [nom, setNombre] = useState(nombre);
  
  const cambiar = async ()=>{
    let res= await (await fetch('http://localhost:4555/sopas')).json();
    setNombre(JSON.stringify(res))
    // setNombre((nom)=>{
    //   nom = "Juan";
    //   return nom;
    // });
  }

  useEffect(()=>{
    const btn= document.querySelector("#zzz");
    console.log(nom);
  })

  return (
    <>
      <div>Formulary</div>
      <button onClick={cambiar}>Sopas</button>
      <div>{nom}</div>
      <div id="zzz">
        Nombre: {nom}
      </div>
    </>
  );
}
Formulario.PropTypes = {
  nombre: PropTypes.string.isRequired,
};
Formulario.defaultProps = {
  nombre: undefined,
};