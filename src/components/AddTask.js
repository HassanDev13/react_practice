import { useState } from "react";

const AddTask = ({clickAddTask}) => {
    
   const [task , setTast ] = useState({
       id : Math.floor(Math.random()* 1000 + 1) ,
       text : '',
       day : '',
       reminder : false 
   }) 

   const onSubmit = (e) => {
     // LET DO SOME VALIDATION 
      e.preventDefault();
     if(!task.text){
         alert("Please add taxt");
         return;
     }

     clickAddTask(task)
     setTast({...task ,id : Math.floor(Math.random()* 1000 + 1),  day : '' , text :'' , reminder : false })
   } 
  return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Task</label>
            <input type ='text' placeholder='Add Task' value={task.text} onChange={(e) => setTast( {...task , text : e.target.value})}></input>
        </div>
        <div>
            <label>Day and Time</label>
            <input type ='text' placeholder='Add Day and Time'
            value={task.day} onChange={(e) => setTast({...task , day : e.target.value})}></input>
        </div>
        <div>
            <label>Set Reminder</label>
            <input type ='checkbox' 
            value={task.reminder}
            checked={task.reminder}
            onChange={(e) => setTast({...task , reminder : e.currentTarget.checked})}></input>
        </div>

        <input  type='submit' value='Save Task'  ></input>
        </form>
  )
}
export default AddTask ; 