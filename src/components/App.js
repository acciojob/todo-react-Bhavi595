
import React , {useState} from "react";
import './../styles/App.css';
// import { filter } from "cypress/types/bluebird";

const App = ()=>{

  const [task , setTask] = useState();
  const [taskList , SetTaskList] = useState([]);
  const [id , setId] = useState(0)
  console.log(task);


  function addtask(e){
     
     e.preventDefault();
     SetTaskList([...taskList,{ id:id , title:task }])
     setTask("");
     setId(id+1);

  }

  function deletetask(deleteId){
    SetTaskList(taskList.filter((item)=> item.id !== deleteId ))
  }



  return (
    <div>
        <form onSubmit={addtask}>
          <input placeholder="Task name" onChange={(e)=>{setTask(e.target.value)}}  value={task}/>
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {taskList.map((item)=>(<div>
            <li>{item.title} <button onClick={()=>deletetask(item.id)}>Delete</button></li>
           
          </div>))}
        </ul>
    </div>
  )
}

export default App;
