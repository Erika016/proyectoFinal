// import classes from "./ExerciseDatas.module.css";
import React, { useState } from "react";

export const ExerciseDatas = (props) => {  
  
    console.log('llego al exercise datas y estos son los props', props)

    const [exerciseDatas, setDatas] = useState({
      hasExerciseDatas: false
    })

    if(props.exercises.length > 0){
      setDatas ({
        hasExerciseDatas: true
      })
      
    }

    //  var arrayWeightDatas = [];
   
    //  const getWeight = (e) => {
    //   if(e && e !== ''){
    //  const bus = 2;
    //    console.log('esta es la e', e)
    //    fetch("http://localhost:8000/exercises/searchWeight/"+ e + "/" + bus, {
    //      method: "GET",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //    })
    //      .then((res) => res.json())
    //      .then((data) => {
        
    //        console.log('este es el array', data);
    //      });
    //     } else {

    //     }
    //  };

   
      return (
      //   {props.exercises.map((exercise, index) => (
      //     <div>
      //       <p className={classes.nameExercises} onClick={() => getWeight(exercise.id_exercise)}key={index}>{exercise.name}</p>
         
      //     </div>
      //   ))}
      // <div>
      // <p>Pesos</p>
      // </div>

<div >
<h2>Pesos</h2>
<table class="table">
  <thead>
    <tr class="barraTitulos">
      <th class="tit" scope="col">Fecha</th>
      <th class="tit" scope="col">Peso</th>
      <th class="tit" scope="col">Borrar</th>
    </tr>
  </thead>
  <tbody>
    
    {props.exercises.map((exercise, index) => (
      <tr>
      <td></td>
      <td></td>
      <td><button>Borrar</button></td>
      </tr>
      ))}
      
  </tbody>
</table>
</div>
      );
   };
   