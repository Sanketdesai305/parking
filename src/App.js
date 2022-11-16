
import './App.css';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [user,setUser]= useState("")
  const [num,setNum]= useState("")
  const [hour,setHour]= useState("")
  const [time,settime]= useState("")
  const [exit,setexit]= useState({})
  const [todo,settodo]= useState([])

  const clickHandler=(e)=>{
    e.preventDefault();
    settodo([...todo,{id:uuidv4(),Name:user,Number:num,Enter:time,Exit:exit}])
    const date = new Date();
    const Ex = new Date();
    const exd = new Date(Ex.getTime() + (hour*60) * 60 * 1000)
    setexit(exd.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
    const tid = (date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
    settime(tid)
  }
  return (
    <div className="App">
      <div className='form'>
        <input placeholder='Driver Name' onChange={(e)=>setUser(e.target.value)}/>
        <input placeholder='Vehicle Number' onChange={(e)=>setNum(e.target.value)}/>
        <input placeholder='How many Hours' onChange={(e)=>setHour(e.target.value)}/>
        <button className='button' onClick={clickHandler}>Submit</button>
      </div>
        {todo.filter((f)=>f.Enter).map((to)=>(
          <ul className='list' key={to.id}>
            <li>{to.Name}</li>
            <li>{to.Number}</li>
            <li>{to.Enter}</li>
            <li>{JSON.stringify(to.Exit)}</li>
          </ul>
        ))}
    </div>
  );
}

export default App;
