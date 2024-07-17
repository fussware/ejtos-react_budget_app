import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        if  (event.target.value > 20000) {
            alert('Budget could not exceed 20000');
        } else if (event.target.value < totalExpenses) {
            alert('You cannot reduce the budget below the total expenses')
        }
        else {
            setNewBudget(event.target.value);
        }
        
    }

    return (
<div className='alert alert-success'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
