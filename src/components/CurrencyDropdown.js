import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('£');

    const handleChange = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency(selectedCurrency);
        dispatch({
            type: 'SET_CURRENCY',
            payload: selectedCurrency,
        });
    }

    return (
        <div className='alert alert-success' style={{ backgroundColor: '#86F099'}}>
            <span className='text-white'>Currency: </span>
            <select className='text-white' style={{backgroundColor: '#86F099', borderColor:'#86F099', }}
                id="currency"
                value={currency}
                onChange={handleChange} 
            >
                <option value="$" style={{ color: 'black' }}>$ Dollar</option>
                <option value="£" style={{ color: 'black' }}>£ Pound</option>
                <option value="€" style={{ color: 'black' }}>€ Euro</option>
                <option value="₹" style={{ color: 'black' }}>₹ Ruppee</option>
            </select>
        </div>
    );
}

export default CurrencyDropdown;
