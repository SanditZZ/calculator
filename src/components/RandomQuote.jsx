import { useEffect, useState, useCallback } from "react";
import { Tooltip } from 'react-tooltip'

import axios from 'axios'



export default function RandomQuote () {

const [hasError, setHasError] = useState(false);

const [data, setData] = useState('')

const fetchData = useCallback (async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random')
      setData(response.data.content)
    } catch (error) {
    console.error(error)
    setHasError(true)
  }
}, [])

useEffect(() => {
const quoteBtn = document.querySelector('.quote-btn')
quoteBtn.addEventListener('click', fetchData)

return () => {
  quoteBtn.removeEventListener('click', fetchData)
}
}, [fetchData])

return (
    <div className="Component-center gap-5">
        {hasError ? <div className='text-center text-lg mx-10 md:mx-20' data-tooltip-id="counter-title-tooltip" data-tooltip-html="This Random Quote app was created <br/> using the useEffect hook to fetch <br/> data from an API."> <h1 className='m-5 text-2xl leading-10'>Random Quote <br/> Please wait for an hour </h1> </div> : <div className='text-center text-lg mx-10 md:mx-20' data-tooltip-id="counter-title-tooltip" data-tooltip-html="This Random Quote app was created <br/> using the useEffect hook to fetch <br/> data from an API."> <h1 className='m-5 text-2xl'>Random Quote</h1> "{data}" </div> } 
        <button className="quote-btn"> Press Me!</button>
        <Tooltip id="counter-title-tooltip" place="top" className='counter-title-tooltip'/>
    </div>
)
}