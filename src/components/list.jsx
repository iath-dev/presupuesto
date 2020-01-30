import React from 'react'
import Costs from './cost';
import PropTypes from 'prop-types';

const CostList = ({ costs }) => {
    return (
        <React.Fragment>
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {costs.map((item) => (
                    <Costs key={item.id} item={item} />
                ))}
            </div>
        </React.Fragment>
    )
}

CostList.propTypes = {
    costs: PropTypes.array.isRequired,
}

export default CostList;
