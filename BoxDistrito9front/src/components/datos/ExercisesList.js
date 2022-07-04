import classes from "./ExercisesList.module.css"


export const ExercisesList = (props) => {

    console.log('esto es lo que llega del props', props)

    var array = [];

    props.exercises.forEach(element => {
        array.push({name: element.name})
    });
    console.log('este es el array', array)

    // const arrayExercises  = array.map((name)=> 
    // <li>{name}</li>);
    // ReactDOM.render(
    //     <ul>{arrayExercises}</ul>,
    //     document.getElementById('root')
    // );

   
    //  var weightDatas ={
    //    date: '',
    //    weight: ''
    //  }

    // var weightId = undefined;
   
    //  var arrayWeightDatas = [];
   
    //  const getWeight = (e) => {
    //    const bus = 2;
    //    console.log('esta es la e', e)
    //    fetch("http://localhost:8000/exercises/searchWeight/"+ e + "/" + bus, {
    //      method: "GET",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //    })
    //      .then((res) => res.json())
    //      .then((data) => {
    //        console.log('esta es la data 2', data.data);
    //        arrayWeightDatas = data.data;
    //        // data.data.forEach(element => {
    //        //    arrayWeightDatas = weightDatas.push[{date: element.date, weight: element.weight}]
    //        // });
    //        console.log('este es el array', arrayWeightDatas);
    //      });
    //  };
   
     return (
        <>
        <p>Muestro el listado</p>
<div id="root"></div>
        {/* <div>{props.exercises}</div> */}
        {/* <p>{props.exercises.map(name => <h1 key={name}>{name}</h1>)}</p> */}
        {/* <div>{array.map(name => <h1>{name}</h1>)}</div> */}
       </>
     );
   };
   