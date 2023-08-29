import React, { useEffect, useState } from 'react'
import Greeting from '../Utils/Greeting';
const greeting = new Greeting();
const Welcome = ({name}) => {
    const [message, setMessage] = useState('');
    useEffect(()=>{
        setMessage(greeting.for(name))
    }, [name])
  return (
    <div>{message}</div>
  )
}

export default Welcome