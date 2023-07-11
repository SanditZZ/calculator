import React, { useReducer } from 'react'

import '../App.css'

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

  return (
  <div className='Component-center gap-5'>
      <div className='counter-title mb-5 text-4xl'>&#x1F9EE; Counter &#x1F9EE;</div>
      <div className='counter-value text-7xl' style={{color: state.valueColor}}>{state.counterValue}</div>
      <div className='flex flex-row gap-0'>
      <button onClick={decreaseValueColor}> Decrease <br /> &#x25C0;</button>
      <button onClick={resetValueColor}>Reset<br /> &#x267B;</button>
      <button onClick={increaseValueColor}>Increase <br /> &#x25B6; </button>
      </div>
  </div>
)
}
