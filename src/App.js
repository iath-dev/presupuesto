import React from 'react';
import Question from './components/question';
import CostForm from './components/form';
import CostList from './components/list';
import ControlBudget from './components/control';

function App() {

  const [ budget, setBudget ] = React.useState(0);
  const [ savings, setSavings ] = React.useState(0);
  const [costs, setCosts] = React.useState([]);
  const [show, setShow] = React.useState(true);


  const addCost = cost => {
    setCosts([...costs, cost]);
    setSavings(parseInt(savings) - parseInt(cost.cost));
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
                <CostList costs={costs} />
                <ControlBudget budget={budget} savings={savings} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
