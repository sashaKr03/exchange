/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Converter.css'
import ex from '../img/free-icon-exchange-152360.png'
import { fetchExchangeRates } from '../api/fetchExchangeRates'

const Converter:React.FC = () => {

    const [firstSelectValue, setFirstSelectValue] = useState('')
    const [secondSelectValue, setSecondSelectValue] = useState('')
    const [firstInpValue, setFirstInpValue] = useState<any>('')
    const [secondInpValue, setSecondInpValue] = useState<any>('')

    const [firstSelectExStatus, setFirstSelectExStatus] = useState(false)
    const [secondSelectExStatus, setSecondSelectExStatus] = useState(false)
    const [firstInputExStatus, setFirstInputExStatus] = useState(false)
    const [secondInputExStatus, setSecondInputExStatus] = useState(false)

    const currencySelect = [
        {name:'Валюта', value:'', disabled:true},
        {name:'Американський доллар', value:'USD'},
        {name:'Гривня', value:'UAH'},
        {name:'Євро', value:'EUR'},
    ]

    function doExchangeFromFirstSelect(){
        if(secondSelectValue!=='' && firstInpValue!==''){
            fetchExchangeRates(firstSelectValue, secondSelectValue, firstInpValue)
                .then((result:number)=>{
                    if(Number(firstInpValue)>0){
                        setSecondInpValue(result)
                        }else{
                            setSecondInpValue(0)
                        }      
                    } 
                )
        }
    }

    function doExchangeFromFirstInp(){
        if(secondSelectValue!=='' && firstSelectValue!==''){
            fetchExchangeRates(firstSelectValue, secondSelectValue, firstInpValue)
                .then((result:number)=>{
                    if(Number(firstInpValue)>0){
                        setSecondInpValue(result)
                        }else{
                            setSecondInpValue(0)
                        }      
                    } 
                )
        }
    }

    function doExchangeFromSecondSelect(){
        if(secondInpValue!=='' && firstSelectValue!==''){
            fetchExchangeRates(secondSelectValue, firstSelectValue, secondInpValue)
                .then((result:number)=>{
                    if(Number(secondInpValue)>0){
                        setFirstInpValue(result)  
                        }else{
                            setFirstInpValue(0)
                        } 
                    } 
                )
        }
    }

    function doExchangeFromSecondInput(){
        if(secondSelectValue!=='' && firstSelectValue!==''){
            fetchExchangeRates(secondSelectValue, firstSelectValue, secondInpValue)
                .then((result:number)=>{
                    if(Number(secondInpValue)>0){
                        setFirstInpValue(result)
                    }else{
                            setFirstInpValue(0)
                        } 
                    
                    } 
                )
        }
    }
    
    useEffect(
        ()=> doExchangeFromFirstSelect()
    ,[firstSelectExStatus]
    )

    useEffect(
        ()=> doExchangeFromFirstInp()
    ,[firstInputExStatus]
    )

    useEffect(
        ()=> doExchangeFromSecondSelect()
    ,[secondSelectExStatus]
    )

    useEffect(
        ()=> doExchangeFromSecondInput()
    ,[secondInputExStatus]
    )

  return (
    <div className='converterCover'>
        <div className='firstSelect'>
            <select
                style={{color: firstSelectValue==='' ? 'grey' : 'black'}}
                defaultValue={firstSelectValue}
                onChange={e=>setFirstSelectValue(e.target.value)}
                onInput={e=>setFirstSelectExStatus(prev=>!prev)}
            >
            {currencySelect.map((e,i)=>
                <option
                    style={{color: i!== 0 ? 'black' : 'gray'}}
                    disabled={e.disabled && e.disabled}
                    key={e.value}
                    value={e.value}>
                    {e.name}    
                </option>
            )}
            </select>
            <p>
                <input
                    value={firstInpValue}
                    onChange={e=>setFirstInpValue(e.target.value)}
                    type='number'
                    onInput={e=>setFirstInputExStatus(prev=>!prev)}
                />
            </p>
        </div>
        <img className='imgEx' alt='exchange' src={ex}/>
        <div className='secondSelect'>
            <select
                style={{color: secondSelectValue==='' ? 'grey' : 'black'}}
                defaultValue={secondSelectValue}
                onChange={e=>setSecondSelectValue(e.target.value)}
                onInput={e=>setSecondSelectExStatus(prev=>!prev)}
            >
            {currencySelect.map((e,i)=>
                <option 
                    style={{color: i!== 0 ? 'black' : 'gray'}}
                    disabled={e.disabled && e.disabled}
                    key={e.value}
                    value={e.value}>
                    {e.name}    
                </option>
            )}
            </select>
            <p>
                <input
                    value={secondInpValue}
                    onChange={e=>setSecondInpValue(e.target.value)}
                    onInput={e=>setSecondInputExStatus(prev=>!prev)}
                />
            </p>
        </div>
    </div>
  )
}

export default Converter