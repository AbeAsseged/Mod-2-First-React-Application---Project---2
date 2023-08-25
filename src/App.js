import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
























// import React, { useEffect, useState } from 'react'
// import CurrencyBars from './CurrencyBars';
// import './App.css';

// const Base_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'

// function App() {
//   const [currencyOptions, setCurrencyOptions] =useState([])
//   const [fromCurrency, setFromCurrency] = useState()
//   const [toCurrency, setToCurrency] = useState()
//   const [exchangeRate, setExchangeRate] = useState()
//   const [amount, setAmount] = useState(1)
//   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

//   let toAmount, fromAmount
//   if (amountInFromCurrency) {
//     fromAmount = amount
//     toAmount = amount * exchangeRate 
//   }else {
//     toAmount = amount
//     fromAmount = amount / exchangeRate
//   }

//   useEffect(() => {
//     fetch(Base_URL)
//     .then (res =>res.json())
//     .then(data => {
//       const firstCurrency = Object.keys(data.rates) [0]
//       setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//       setFromCurrency(data.base)
//       setToCurrency(firstCurrency)
//       setExchangeRate(data.rates[firstCurrency])
//     })
//   })

//   useEffect(() => {
//     if (fromCurrency != null && toCurrency != null) { 
//     fetch(`${Base_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
//     .then(response => response.json())
//     .then(data => setExchangeRate(data.rates[toCurrency]))
//      }
//   },[fromCurrency, toCurrency])

//   function handleFromAmountChange(evt) {
//     setAmount(evt.target.value)
//     setAmountInFromCurrency(true)
//   }

//   function handleToAmountChange(evt) {
//     setAmount(evt.target.value)
//     setAmountInFromCurrency(false)
//   }


//   return (
//     <>
//     <h1>Convert</h1>
//     <CurrencyBars 
//     currencyOptions={setCurrencyOptions}
//     selectedCurrency={fromCurrency}
//     onChangeCurrency={evt => setToCurrency(evt.target.value)}
//     onChangeAmount={handleFromAmountChange}
//     amount={fromAmount}
//     />
//     <div className='equals'>=</div>
//     <CurrencyBars 
//     currencyOptions={currencyOptions}
//     selectedCurrency={toCurrency}
//     onChangeCurrency={evt => setToCurrency(evt.target.value)}
//     onChangeAmount={handleToAmountChange}
//     amount={toAmount}

// />
//     </>
//   );
// }

// export default App;
