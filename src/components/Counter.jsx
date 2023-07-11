import React, { useReducer, useEffect, useState } from 'react'

import axios from 'axios'

import '../App.css'

// add bigger counterValue when bigger number later

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counterValue: state.counterValue + 1 }
    case "DECREASE":
      return { ...state, counterValue: state.counterValue -1 }
    case "RESET":
      return { ...state, counterValue: 0 }
    case "CHANGE_VALUE_COLOR":
      return { ...state, valueColor: action.payload }

    default:
      return state
  }
}

export default function Counter () {
  const [state, dispatch] = useReducer(reducer, {counterValue:0, valueColor: 'white'})

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const resetColor = (color) => {
    dispatch ({ type: "CHANGE_VALUE_COLOR", payload: color })
  }
  const increaseValueColor = () => {
    const newValueColor = getRandomColor()
    dispatch({ type: "INCREMENT"})
    dispatch({ type:'CHANGE_VALUE_COLOR', payload: newValueColor})
  }
  const decreaseValueColor = () => {
    const newValueColor = getRandomColor()
    dispatch({ type: "DECREASE"})
    dispatch({ type:'CHANGE_VALUE_COLOR', payload: newValueColor})
  }
  const resetValueColor = () => {
    dispatch( { type: "RESET"})
    resetColor('white');
  }

  const [hasError, setHasError] = useState(false);

  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://animechan.xyz/api/random')
        setData(response.data.quote)
      } catch (error) {
      console.error(error)
      setHasError(true)
    }
  }
  
    fetchData()
  }, [])
  

  return (
  <div className='Component-center gap-5'>
      <div className='counter-title mb-5 text-4xl'>&#x1F9EE; Counter &#x1F9EE;</div>
      {hasError ? null : <div className='text-center text-xl mx-10 md:mx-20'> <h1 className='m-5 text-3xl'>Random Quote</h1> "{data}" </div> } 
      <div className='counter-value text-7xl' style={{color: state.valueColor}}>{state.counterValue}</div>
      <div className='flex flex-row gap-0'>
      <button onClick={decreaseValueColor}> Decrease <br /> &#x25C0;</button>
      <button onClick={resetValueColor}>Reset<br /> &#x267B;</button>
      <button onClick={increaseValueColor}>Increase <br /> &#x25B6; </button>
      </div>
  </div>
)
}
