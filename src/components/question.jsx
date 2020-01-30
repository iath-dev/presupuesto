import React from 'react';
import ErrorMessage from './error';
import PropTypes from 'prop-types';

const Question = ({ setData, setSavings, setShow }) => {

    const [budget, setBudget] = React.useState(0);
    const [error, setError] = React.useState(false);

    const handleChange = event => {
        const { value } = event.target;
        setBudget(parseInt(value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (budget < 1 || isNaN(budget)) {
            setError(true);
            return;
        }
        setError(false);
        setSavings(parseInt(budget));
        setData(parseInt(budget))
        setShow(false);
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
                    value={budget}
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

Question.propTypes = {
    setData: PropTypes.func.isRequired,
    setSavings: PropTypes.func.isRequired,
    setShow: PropTypes.func.isRequired,
}

export default Question;
