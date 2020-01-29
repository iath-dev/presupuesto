import React from 'react';
import ErrorMessage from './error';

const Question = ({ setData, setSavings }) => {

    const [budqet, setBudqet] = React.useState(0);
    const [error, setError] = React.useState(false);

    const handleChange = event => {
        const { value } = event.target;
        setBudqet(parseInt(value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (budqet < 1 || isNaN(budqet)) {
            setError(true);
        }
        setError(false);
    }

    return (
        <React.Fragment>
            <h2>Coloque su presupuesto</h2>
            { error ? <ErrorMessage message="El presupuesto no es valido" /> : null }
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Indique su presupuesto"
                    value={budqet}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >
                    DEFINIR PRESUPUESTO
                </button>
            </form>
        </React.Fragment>
    )
}

export default Question;
