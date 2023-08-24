
import React, { useEffect, useState } from 'react'
import CurrencyBars from './CurrencyBars';
import './App.css';

const Base_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] =useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amont, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amountInFromCurrencytoAmount = amount * exchageRate 
  }else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(Base_url)
    .then (res =>res.json())
    .then(data => {
      const currency =Object.keys(data.rates) [0]
      setCurrenctyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
  })


  return (
    <>
    <h1>Convert</h1>
    <CurrencyBars />
    currencyOptions={setCurrenctyOptions}
    selectCurrency={fromCurrency}
    onChangeCurrency={evt => setToCurrency(evt.target.calue)}
    amount={fromAmount}

    <div className='equals'>=</div>
    <CurrencyBars />
    currencyOptions={CurrenctyOptions}
    selectCurrency={toCurrency}
    onChangeCurrency={evt => setToCurrency(evt.target.calue)}
    amount={toAmount}


    </>
  );
}

export default App;
