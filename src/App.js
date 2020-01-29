import React from 'react';
import Question from './components/question';

function App() {

  const [ budqet, setBudquet ] = React.useState(0);
  const [ savings, setSavings ] = React.useState(0)

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Question setData={setBudquet} setSavings={setSavings} />
        </div>
      </header>
    </div>
  );
}

export default App;
