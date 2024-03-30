import React,{useState,useEffect} from 'react';
import './Counter.css';

function Counter() {
    const[count , setCount] = useState(0);
    const[warn , setWarn] = useState('No Warning');
    useEffect(()=>{
        if(count>10){
            setWarn('Count can not be greater than 10 ');
        }
        else if (count<0){
            setWarn('Count can not be less than 0 ');
        }
        else{
            setWarn('No Warning');
        }
        
    },[count])
    
  return (
    <div>
      <h1 className='Counter'>Counter:{count}</h1>
      <p className='Warning'>{warn}</p>
      <div className='btn-sec'>
      <button className='counter-btn' onClick={()=>{setCount(count+1)}}>Increment</button>
      <button className='counter-btn' onClick={()=>{setCount(count-1)}}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;
