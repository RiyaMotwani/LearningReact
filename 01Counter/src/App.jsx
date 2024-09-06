import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [val, setVal] = useState(0);

    const increment = ()=>{
      if (val>=20){
        alert("Value cant increase more than 20.");
      } else{
        val=val+1;
      }
      setVal(val);
    }
    const decrement = ()=>{
      if (val<=0){
        alert("Value cant decrease less than 0.");
      } else{
        val=val-1;
      }
      setVal(val);
    }

  return (
    <>
      <h1>Counter Value : {val}</h1>

      <button onClick={increment}>Increase Value</button>
      <br />
      <button onClick={decrement}>Decrease Value</button>
    </>
  )
}

export default App
