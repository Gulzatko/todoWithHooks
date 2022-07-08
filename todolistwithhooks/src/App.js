
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [task, setTask]=useState("")
  const [taskList, setTasksList]=useState([])
  const handlerClick=()=>{
  const newTaskList =[...taskList, task]
  setTasksList(newTaskList)
  setTask("")
}

 const deleteList =(index) => {
  const newTaskList = [...taskList]
  newTaskList.splice(index,1)
  setTasksList(newTaskList)
 }
  return (
    <div className="App">
     <input value={task} onChange={(e)=>setTask(e.target.value)}></input>
    <button onClick={()=>handlerClick()}>Add Task</button>
    <ul>
      {taskList.map((list)=>{
       return(<li onClick={()=>deleteList()}>{list}</li>)
      })
      }
    </ul>
    </div>
  );
}

export default App;
