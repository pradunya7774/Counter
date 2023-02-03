
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setcount]=useState(0);
  const dece=()=>{
    setcount(count-1)
  }
  const Inc=()=>{
    setcount(count+1)
  }
 
  return (
   
    <div className="App">
      <buuton className="btn" onClick={dece}>-</buuton>
      <span className='count'>{count}</span>
      <buuton className="btn" onClick={Inc}>+</buuton>
    </div>
    
   

    
  );
}

export default App;
