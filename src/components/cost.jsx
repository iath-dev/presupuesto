import React from 'react';
import PropTypes from 'prop-types';

const Costs = ({ item }) => (
    <li className="gastos">
        <p>
            {item.name}
            <span className="gasto">{`$${item.cost}`}</span>
        </p>
    </li>
)

Costs.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
    }).isRequired,
}

export default Costs;
