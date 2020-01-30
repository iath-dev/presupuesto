/**
 * Función que devuelve el estilo de los restante
 * @param {number} budget 
 * @param {number} savings 
 */
export const checkBudget = (budget, savings) => {
    if ((budget / 4) > savings) {
        return 'alert alert-danger';
    } else if ((budget / 2) > savings ) {
        return 'alert alert-warning';
    } else {
        return 'alert alert-success';
    }
}