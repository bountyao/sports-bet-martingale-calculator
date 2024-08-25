import './Calculation.css';
import React from 'react'
function Calculation({ initialLoss, odds, desiredProfit }) {
  
  let result = (initialLoss + desiredProfit) / (odds - 1);
  return (
    <>
      <p className='Calculation'>2nd Bet Size: ${result.toFixed(2) || 0}</p>
      <p className='Calculation'>Est. Payout: ${(result*odds).toFixed(2) || 0}</p>
    </>
  );
}


export default Calculation;
