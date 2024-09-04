import React, { useState } from 'react';
import './App.css';
import ResultTable from './components/ResultTable';

function App() {
  const [prop1, setProp1] = useState("");
  const [prop2, setProp2] = useState("");
  const [op, setOp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setProp1(formData.get("proposicao1"));
    setProp2(formData.get("proposicao2"));
    setOp(formData.get("operacao"));
    setSubmitted(true);
  }

  const toggleButtonProp1 = () => {
    setIsActive(!isActive);
  }
  const toggleButtonProp2 = () => {
    setIsActive2(!isActive2);
  }

  if (submitted) {
    return (
      <div className="result-container">
        <ResultTable prop1={prop1} prop2={prop2} op={op} isActive={isActive} isActive2={isActive2} />
        <button onClick={() => setSubmitted(false)}>Voltar</button>
      </div>
    );
  }

  return (
    <>
      <div className="header">
        <h1>Trabalho de Matemática Discreta</h1>
        <p>Calculadora de lógica proposicional</p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="form-control">
              <label htmlFor="proposicao1">1º proposição:</label>
              <div className="inputs">
                <button type='button' onClick={toggleButtonProp1} className={isActive ? "active" : "inactive"}>~</button>
                <input type="text" name='proposicao1' id='proposicao1' placeholder='Coloque a primeira proposição' required maxLength="1" />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="operacao">Operação:</label>
              <select name="operacao" id="operacao" required>
                <option value="and">Conjunção (∧)</option>
                <option value="or">Disjunção (∨)</option>
                <option value="implies">Condicional (→)</option>
                <option value="biconditional">Bicondicional (↔)</option>
              </select>
            </div>

            <div className="form-control">
              <label htmlFor="proposicao2">2º proposição:</label>
              <div className="inputs">
                <button type='button' onClick={toggleButtonProp2} className={isActive2 ? "active" : "inactive"}>~</button>
                <input type="text" name='proposicao2' id='proposicao2' placeholder='Coloque a segunda proposição' required maxLength="1" />
              </div>
            </div>
          </div>

          <input className='button' type="submit" value="Calcular" />
        </form>
      </div>
    </>
  );
}

export default App;