
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = (name) => {
    const { dispatch } = useContext(AppContext);    
    const expense = {
        name: name,
        cost: 10,
    }

    dispatch({
        type: 'CHG_CURRENCY',
        payload: expense
    });

}

const Currency = () => {
    const { Currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <select onChange={ ChangeCurrency } className ="custom-select bg-success form-control">
                <option>$ Dollar</option>
                <option>£ Pound</option>
                <option>€ Euro</option>
                <option>₹ Ruppee</option>
            </select>

        </div>
    );
};
export default Currency;