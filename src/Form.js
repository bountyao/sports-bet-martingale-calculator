import React from 'react'
import {useState, useEffect} from "react";
import Calculation from './Calculation';
import "./Form.css"

function Form() {
    const [initialLoss, setInitialLoss] = useState(null)
    const [odds, setOdds] = useState(null)
    const [desiredProfit, setDesiredProfit] = useState(null)

    useEffect(() => {
        setDesiredProfit(initialLoss * (odds - 1));
      }, [initialLoss, odds]);
    
    return (
        <div className='Calculate'>
        <form>
            <label>Previous Loss Size</label>
            <input
            type="number"
            value={initialLoss}
            onChange={(e)=>setInitialLoss(Number(e.target.value))}
            required
            />
            <label>2nd bet Odds</label>
            <input
            type="number"
            value={odds}
            onChange={(e)=>setOdds(Number(e.target.value))}
            required
            />
        </form>
        <Calculation initialLoss={initialLoss} odds={odds} desiredProfit={desiredProfit}></Calculation>
        </div>
    );
}

export default Form;