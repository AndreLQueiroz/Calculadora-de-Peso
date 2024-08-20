/*import das dependencias*/
import {useEffect, useState} from 'react'
import Header from "./components/Header"
import Resultado from './components/Resultado'
import './css/base.css'
import './css/app.css'



function App() {

//Hooks- useState- ele altera o estado da variavel
const [altura, setAltura]= useState(0);/*inicia em 0*/
const [peso, setPeso]= useState(0);
const [resultado,setResultado]= useState(0);
const [mostrarresultado, setMostrarResultado]= useState(false); /*inicia em false */


//criando a função 
const calcularImc=()=>{
  /* calculo da operação do imc  */
  const imc =peso /(altura * altura)
  /*returno da alteração convertida em int e com apenas duas casas decimais */
  return setResultado (parseInt(imc.toFixed(2)))
}

//Hooks- useEffect - faz um efeito colateral no resultado
useEffect(()=>{
  //condição ternaria para mostrar ou não o resultado
 resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false)
},[resultado])

  

  return (
    <>
    <div className="container">

    <div className="box">
      <Header/>
      <form>
        <div>
          <label htmlFor="altura">Altura:<span className="span">(ex: 1.80)</span></label>
          <input type="number" id="altura" placeholder="Sua Altura"
           onBlur={({ target })=>(setAltura(target.value))}/>
        </div>
        <div>
          <label htmlFor="peso">Peso:<span className="span">(ex: 80)</span></label>
          <input type="number" id="peso" placeholder="Seu Peso" onBlur={({target })=>(setPeso(target.value))}/>
        </div>
        <button type="submit" onClick={calcularImc}>Calcular</button>
      </form>
    </div>

      {mostrarresultado &&(
        //chamando o componente Resultado e definindo uma props
        <Resultado resultado={resultado}/>
      )}

    </div>
     
    </>
  )
}

export default App
