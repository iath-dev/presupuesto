import React from 'react';
import Question from './components/question';
import CostForm from './components/form';

function App() {

  const [ budget, setBudget ] = React.useState(0);
  const [ savings, setSavings ] = React.useState(0);
  const [costs, setCosts] = React.useState([]);
  const [show, setShow] = React.useState(true);


  const addCost = cost => {
    setCosts([...costs, cost]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {show ? (
            <Question setData={setBudget} setSavings={setSavings} setShow={setShow} />
          ): (
            <div className="row">
              <div className="one-half column">
                <CostForm onAdd={addCost} />
              </div>
              <div className="one-half column">
                <p>Hola</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
