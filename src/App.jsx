import { useState } from "react";

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState('')
  const [classificacao, setClassificacao] = useState('')

  const valorAltura = (e) => {
    setAltura(Number(e.target.value));
  };

  const valorPeso = (e) => {
    setPeso(Number(e.target.value));
  };

  const cauculaIMC = () => {
    const valorIMC = peso / (altura * altura);
    setResultado(parseInt(valorIMC));
    
    if (valorIMC < 18) {
      setClassificacao("Abaixo do Peso");
    } else if (valorIMC < 24) {
      setClassificacao("Peso Saudável");
    } else if (valorIMC < 29) {
      setClassificacao("Sobrepeso");
    } else if (valorIMC < 34) {
      setClassificacao("Obesidade Grau I");
    } else if (valorIMC < 39) {
      setClassificacao("Obesidade Grau II");
    } else {
      setClassificacao("Obesidade Grau III")
    }
  }


  return (
    <div class="container">
      <h1>Calculo IMC</h1>
      <input type="number" placeholder="Altura (m)" value={altura} onChange={valorAltura}/>
      <input type="number" placeholder="Peso (g)" value={peso} onChange={valorPeso}/>
      <button onClick={cauculaIMC}>Calcular IMC</button>
      <p>Resultado: {resultado} {classificacao}</p>
    </div>
  )
}

export default App
