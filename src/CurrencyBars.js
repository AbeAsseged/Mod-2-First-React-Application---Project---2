import React from 'react'

export default function CurrencyBars(props) {
    const {
        currencyOptions, 
        selectedCurrency,
        onChangeCurrency
    } = props 

  return (
    <div>
        <input type='number' className='input' />

        <select calue={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
