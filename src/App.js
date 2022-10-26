import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
//Recarga la pagina para cambiar los numeros aleatorios


function App() {
//En esta linea hasta antes del return solo javascript

useEffect(()=>countTime())




const [num1, setnum1] = useState(Math.floor(Math.random() *12))
const [num2, setNum2] = useState(Math.floor(Math.random() *12))
const solution = num1* num2
const [cantidadEjercicios, setcantidadEjercicios]= useState(0);
const [cantidadEjerciciosCorrectos, setcantidadEjerciciosCorrectos] = useState(0);
const [instime, setinttime] =useState(false);

const [respuestaAli, setrespuestaAli] = useState()
//console.log(respuestaAli)



//console.log(solution)

function handleState(eventWrite) {
  setrespuestaAli(eventWrite.target.value)
  
}
function isCorrect(respuesta) {
  console.log(respuesta)
  if(parseInt(respuesta)=== solution){
    console.log("Respuesta Correcta")
    
    setcantidadEjerciciosCorrectos( cantidadEjerciciosCorrectos+1);
 

  }
  setcantidadEjercicios(cantidadEjercicios+1);
  
  setnum1(Math.floor(Math.random() *12))
  setNum2(Math.floor(Math.random() *12))
  
} 

function isResult(){
  alert("Cantidad de ejercicios:  " + cantidadEjercicios + "  Cantidad de ejercicios correctos:  " + cantidadEjerciciosCorrectos);
}

function countTime(){
  setTimeout(()=>setinttime(true), 30000 );
}
console.log(instime)
  return (
    

    <div className="App">
      <header className="App-header">
        <img src='https://images.pexels.com/photos/6624378/pexels-photo-6624378.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load
        ' className="App-logo" alt="logo" />
        <label className='label'>{num1}</label>
        <label className='label'>*</label>
        <label className='label'>{num2}</label>
        <label className='label'>=</label>
        <input type='text'className='input' onChange={handleState}></input>

      
       {(!instime)?<button className='primary-button'onClick={()=>isCorrect(respuestaAli)}>Next</button>:
        <button className='primary-button'onClick={()=>isResult(respuestaAli)}>Result</button>}


       
        
      </header>
    </div>

    
  );
  
}

export default App;
