import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmout } from './counterSlice'
const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmout] = useState(0);
    
    const addValue = Number(incrementAmount) || 0;

    const resetAll = ( ) => {
        setIncrementAmout(0)
        dispatch(reset())
    }


  return (
    <section>
        <p>{count}</p>
        <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
        <input 
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmout(e.target.value)}
        />
        <div>
            <button onClick={() => dispatch(incrementByAmout(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </section>
  )
}

export default Counter