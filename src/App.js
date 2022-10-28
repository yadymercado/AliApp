import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef} from 'react';
//Recarga la pagina para cambiar los numeros aleatorios


function App() {
//En esta linea hasta antes del return solo javascript

useEffect(()=>countTime())
const textInput = useRef(null);



const [num1, setnum1] = useState(Math.floor(Math.random() *12))
const [num2, setNum2] = useState(Math.floor(Math.random() *12))
const [cantidadEjercicios, setcantidadEjercicios]= useState(0);
const [cantidadEjerciciosCorrectos, setcantidadEjerciciosCorrectos] = useState(0);
const [instime, setinttime] =useState(false);
const[mostrarResultado, setmostrarResultado]= useState(false);

const [respuestaAli, setrespuestaAli] = useState()
const [operacion, setoperacion] =useState("suma")
//console.log(respuestaAli)

const solution = ()=>{
  if (operacion=="suma") return num1+ num2
  if (operacion=="resta") return num1- num2
  if (operacion=="multiplicacion") return num1* num2
  if (operacion=="division") return num1/num2

  
}

//console.log(solution)

function handleState(eventWrite) {
  setrespuestaAli(eventWrite.target.value)
  
}
function isCorrect(respuesta) {
  if(parseInt(respuesta)=== solution()){
    console.log("Respuesta Correcta")
    
    setcantidadEjerciciosCorrectos( cantidadEjerciciosCorrectos+1);

  }
  setcantidadEjercicios(cantidadEjercicios+1);
  
  setnum1(Math.floor(Math.random() *12))
  setNum2(Math.floor(Math.random() *12))
  
  setrespuestaAli("");
  textInput.current.focus()

} 

function isResult(){
  //alert("Cantidad de ejercicios:  " + cantidadEjercicios + "  Cantidad de ejercicios correctos:  " + cantidadEjerciciosCorrectos);
  setmostrarResultado(true);
}

function countTime(){
  setTimeout(()=>setinttime(true), 30000);
}

  return (
    

    <div className="App">
      {(!mostrarResultado)?<div className="App-header">
        <img src='https://images.pexels.com/photos/6624378/pexels-photo-6624378.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load
        ' className="App-logo" alt="logo" />
        <label className='label'>{num1}</label>
        {(operacion==="suma")&&<label className='label'>+</label>}
        {(operacion==="resta")&&<label className='label'>-</label>}
        {(operacion==="multiplicacion")&&<label className='label'>*</label>}
        {(operacion==="division")&&<label className='label'>/</label>}

        <label className='label'>{num2}</label>
        <label className='label'>=</label>
        <input type='text'className='input' onChange={handleState} value={respuestaAli} autoFocus ref={textInput}></input>

      
       {(!instime)?<button className='primary-button'onClick={()=>isCorrect(respuestaAli)}>Next</button>:
        <button className='primary-button'onClick={()=>isResult(respuestaAli)}>Result</button>}


        <button className='primary-button'onClick={()=>setoperacion("suma")}>Suma</button>
        <button className='primary-button'onClick={()=>setoperacion("resta")}>Resta</button>        
        <button className='primary-button'onClick={()=>setoperacion("multiplicacion")}>Multiplicacion</button>
        <button className='primary-button'onClick={()=>setoperacion("division")}>Division</button>


        

        
      
    </div>:
    <div><h1>Resultados</h1>
    <span> Respuestas correctas: {cantidadEjerciciosCorrectos}</span>
    <span>Cantidad de ejercicio:{cantidadEjercicios}</span>
    <span>Cantidad de ejercicio incorrectos:{cantidadEjercicios-cantidadEjerciciosCorrectos}</span>
    </div>}
   </div> 
  );
  
}

export default App;
