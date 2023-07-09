import React from 'react'
import styles from '../App.css'
import logo from '../logo.svg';

import Button from './Button';

const Calculator = () => {
    return (
    <div className="App-header gap-3">
        <img src={logo} className="App-logo " alt="logo" />

        <h1>
        BMI Calculator
        </h1>

        <input placeholder='Height' className='placeholder:italic placeholder:text-slate-350 block bg-white text-black border border-slate-300 rounded-md py-2 px-5 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 sm:text-sm' />

        <input placeholder='Weight' className='placeholder:italic placeholder:text-slate-350 block bg-white text-black border border-slate-300 rounded-md py-2 px-5 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 sm:text-sm' />
        
  

        <Button />
    </div>
)
}

export default Calculator