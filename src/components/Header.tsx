import React, { useEffect, useState } from 'react'
import { fetchExchangeRates } from '../api/fetchExchangeRates'
import './Header.css'

const Header:React.FC = () => {

  const [usdRate, setUsdRate] = useState<any>('')
  const [eurRate, setEurRate] = useState<any>('')
    

  useEffect(
    ()=>{
      fetchExchangeRates('USD','UAH','1')
        .then(result=>{
          setUsdRate(result)
            }
        )
      fetchExchangeRates('EUR','UAH','1')
        .then(result=>{
          setEurRate(result)
            }
        )
    }
    ,[]
  )

  return (
    <header>
        <div>
          <h1>ExChange</h1>
        </div>
        <div className='currencyHeader'>
          <h2>USD: {usdRate}</h2>
          <h2>EUR: {eurRate}</h2>
        </div>
    </header>
  )
}

export default Header