import React, { useState } from 'react'
import '../App.css'
import logo from '../logo.svg';

import Button from './Button';

const BMICalculator = (e) => {
    
    // state
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')

    let calcBmi = (e) => {
        // prevent submitting
        e.preventDefault()

        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height')
        } else {
            let bmi = (weight / ((height * height) / 10000))
            setBmi(bmi.toFixed(1))

            // Logic for message
            bmi < 18.5 
            ? setMessage('You are underweight') 
            : bmi < 25 
            ? setMessage('You are normal')
            : bmi > 30
            ? setMessage('You are obese')
            : setMessage('You are overweight');
        }
    }


    return (
    <form onSubmit={calcBmi}>
    <div className="App-header gap-3">
        <img src={logo} className="App-logo " alt="logo" />

        <h1>BMI Calculator</h1>

        <label>Height (cm)</label>
        <input value={height} onChange={(e) => setHeight(e.target.value)} className='block bg-white text-black border border-slate-300 rounded-md py-2 px-5 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 sm:text-sm' />
        
        <label>Weight (kg)</label>
        <input value={weight} onChange={(e) => setWeight(e.target.value)} className='block bg-white text-black border border-slate-300 rounded-md py-2 px-5 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 sm:text-sm' />

        
        <div className='m-3 text-center'>
            <h1>
                {message} <br/>
                Your BMI is: {bmi}
            </h1>
        </div>

        <Button />
    </div>
    </form>
)
}

export default BMICalculator