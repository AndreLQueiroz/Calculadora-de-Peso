import React from 'react'
import '../css/base.css'
import '../css/resultado.css'

/* representa os dados (banco) */
const Dados =(resultado)=>{

  if(resultado < 18.5){
    return(
      <>
      <td>Abaixo do Peso</td>
      <td>Abaixo de 18.5</td>
      </>
    )
  }
    else if(resultado > 18.5 && resultado < 25){
      return(
        <>
        <td>Peso Normal</td>
        <td>18.5 - 24.9</td>
        </>
      )
  }

  else if(resultado > 24 && resultado < 30){
    return(
      <>
      <td>Sobre Peso</td>
      <td>25 - 29,9</td>
      </>
    )
}
else if(resultado > 29 && resultado < 35){
  return(
    <>
    <td>Obesidade de Grau I</td>
    <td>30 - 34,9</td>
    </>
  )
}
else {
  return (
      <>
         <td>Obesidade Grau III ou Móbida</td>
          <td>Maior ou igual a 40</td>
      </>
  )
}
}

/*componente Resultado passando a props resultado para receber os dados  */
const Resultado = ({resultado}) => {
  return (
    <>
    <div className="resultado">
      {/* pegando o resultado da props e passando */}
        <h2>Seu IMC é de:<span className="imgSpan">{resultado}</span></h2>
    </div>

    <table className="table">
      <thead className="tableHeader">
        <tr>
          <th>Classificação:</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        <tr>
          {/*pegando os dados de Dados e colocando em classificação e IMC */}
          {Dados(resultado)}
        </tr>
      </tbody>

    </table>

    </>
   
  )
}

export default Resultado