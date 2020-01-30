import React from 'react';
import { checkBudget } from '../utils';
import PropTypes from 'prop-types';

const ControlBudget = ({ budget, savings }) => {
    return (
        <React.Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={checkBudget(budget, savings)}>
                Restante: $ {savings}
            </div>
        </React.Fragment>
    )
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    savings: PropTypes.number.isRequired,
}

export default ControlBudget;
