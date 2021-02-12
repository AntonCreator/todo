import React from "react";
const Task = ({task, ...props }) => {

const ActiveBtn = () => 
      <div className="action-btn">{!task.done?  
      <p onClick = {props.doneTask}>✔️</p>:
    <p onClick = {props.deleteTask}>❌</p>}
      </div>;  
    
const className = "task" + (task.done ? "  task-done" : "")


return( 
    
    
    <div className={className}>
        <p>{task.title}</p>
        <ActiveBtn />
    </div>
   


)
}
export default Task;