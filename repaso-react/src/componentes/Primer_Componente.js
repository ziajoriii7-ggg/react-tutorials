import React, { useState } from 'react'

export const Primer_Componente = () => {
  // let nombre = "Victor";
  let web = "victorroblesweb.es"

  const [nombre, setNombre] = useState("Victor");

  let cursos = [
    "Master en JavaScript",
    "Master en PHP",
    "Master en React",
    "Master en CSS"
  ];

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }


  return (

    <div>
      <h2>Primer Componente</h2>
      <p>Esto es mi Primer-Componente</p>
      <p>Mi nombre es: <strong className={nombre.length >=4 ? "verde" : "rojo"}>{nombre}</strong></p>
      <p>Mi web es: {web}</p>
      
      <input type ="text" onChange={e => cambiarNombre(e.target.value)} placeholder/>

      <button onClick={e =>{
        console.log("El valor en tu estado es:", nombre);
      }}>Mostrar el valor del estado</button>

      <button onClick={ e => cambiarNombre("BAKURAAAAA")}>
        Cambiar nombre
      </button>

      <h1>Cursos: </h1>
      <ul>
        {
          cursos.map( (curso, indice) => {
            return(<li key ={indice}>
              {curso}
            </li>)
          })
        }
      </ul>
    </div>
  )
}
