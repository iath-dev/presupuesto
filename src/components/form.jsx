import React from 'react';
import ErrorMessage from './error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const CostForm = ({ onAdd }) => {

    const [name, setName] = React.useState('');
    const [cost, setCost] = React.useState(0);
    const [error, setError] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Boolean(name) || !Boolean(cost) || cost < 1) {
            setError(true);
            return;
        }
        setError(false);
        const body = {
            name,
            cost,
            id: shortid.generate(),
        }
        onAdd(body);
        setName('');
        setCost(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gatos aquí</h2>
            {error && <ErrorMessage message="Campos sin llenar o presupuesto invalido" /> }
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    name="cost"
                    onChange={(e) => setCost(e.target.value)}
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}

CostForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default CostForm;
