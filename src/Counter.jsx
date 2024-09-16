import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { increment, decrement, reset, countInputNum } from './redux/counterSlice'
import { useDispatch } from 'react-redux'

function Counter() {
    const [num, setNum] = useState(0)

    const count = useSelector((store)=>store.counterRedcucer.counter)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height: "80vh"}}>
            <div className='w-50 border shadow-2-strong p-5 bg-light'>
                <h3 className='text-center text-danger bg-light'>Counter</h3>
                <h2 className='text-center bg-light'>{count}</h2>
                <div className='d-flex justify-content-center bg-light'>
                    <button className='btn btn-success me-3' onClick={()=>{dispatch(increment())}}>+ Increment</button>
                    <button className='btn btn-danger me-3' onClick={()=>{dispatch(decrement())}}>- Decrement</button>
                    <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
                </div>
                <div className='my-3 d-flex justify-content-arount bg-light'>
                    <input type="number" className='form-control' placeholder='Enter Number' onChange={(e)=>{setNum(e.target.value)}} />
                    <button className='btn btn-primary' onClick={()=>{dispatch(countInputNum(num))}}>Count</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter