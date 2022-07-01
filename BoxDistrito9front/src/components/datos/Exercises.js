import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Mostrar ejercicios
//Show exercises
export function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/exercises//allExercises")
      .then((res) => res.json())
      .then((data) => setExercises(data.data));
  }, []);

  return (
    <div>
      {exercises.map((exercise) => {
        return (
          <li key={exercise.id_exercise}>
            <p>{exercise.name} {exercise.description}</p>
        
            <Link to={`/exercises/${exercise.id_exercise}`}>Ver detalle</Link>
          </li>
        );
      })}
    </div>
  );
}
