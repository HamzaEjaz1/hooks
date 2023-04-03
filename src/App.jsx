import { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  useEffect(()=>{
    console.log("inside use Effect")
  },[count]);

const handleClick= () => setCount(count+1)
const handleClick1= () => setCount1(count1+1)

  return (
   <>
 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <button onClick={handleClick}>Click me</button>
   <div>{count}</div>
 </div>
 <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
    <button onClick={handleClick1}>Click me</button>
   <div>{count1}</div>
 </div>
   </>
  )
}

export default App
