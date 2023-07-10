import React from 'react'
import '../App.css'

export default function Calculator() {
  return (
    <div className='calculator-container min-h-screen bg-primary text-3xl text-white text-center flex flex-none flex-col items-center'>
        <div className="calculator-title m-10">&#x2796; Calculator &#x2795;</div>
        <div className='calculator-grid grid grid-cols-[repeat(4,_6rem)] grid-rows-[minmax(7rem,_auto)_repeat(5,_6rem)] border rounded-2xl overflow-hidden'>
            <div className="output col-span-full bg-black/30 flex flex-col items-end justify-around p-3 break-all">
                <div className="previous-operand text-white/90">123 *</div>
                <div className="current-operand text-white text-5xl">12344</div>
            </div>
            <button className='span-two col-span-2'>AC</button>
            <button>DEL</button>
            <button>÷</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className='span-two col-span-2'>=</button>
        </div>
    </div>
  )
}
