import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import CurrencyBars from './CurrencyBars';
import './App.css';

const Base_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] =useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    fetch(Base_url)
    .then (res =>res.json())
    .then(data => {
      const currency =Object.keys(data.rates) [0]
      setCurrenctyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
    })
  })


  return (
    <>
    <h1>Convert</h1>
    <CurrencyBars />
    currencyOptions={setCurrenctyOptions}
    selectCurrency={fromCurrency}
    <div className='equals'>=</div>
    <CurrencyBars />
    currencyOptions={CurrenctyOptions}
    selectCurrency={toCurrency}

    </>
  );
}

export default App;
