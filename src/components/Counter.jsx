import React, { useState } from 'react'

import '../App.css'

export default function Counter () {

    const [counterValue, setCounterValue] = useState(0)

    const increment = () => {
        setCounterValue(counterValue + 1)
  }

    return (
    <div className='Component-center'>
        <div className='counter-title mb-5 text-4xl'>&#x1F9EE; Counter &#x1F9EE;</div>
        <div className='counter-value text-5xl'>{counterValue}</div>
        <button className='text-2xl m-5 select-none' onClick={increment}>Increase</button>
    </div>
  )
}
