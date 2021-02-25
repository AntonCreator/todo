import React from "react";
import Task from "./components/task";
import Taskinput from "./components/taskinput"
import Random from "./components/randomtodo"

class App extends React.Component {
  constructor(props) {
    super(props)
  
  this.state = {
    tasks : [
      { id:0, title: "Go home!", done: false },
      { id:1, title: "Learn JS!", done: true },
      { id:2, title: "Learn React hard!!!", done: false }
      
    ]
   }

  this.addTask = this.addTask.bind(this)
  }
  
  
  
  addTask = (task) => {

    this.setState(state => {
    let {tasks} = state
    
    tasks.push({id: tasks.length !== 0 ? tasks.length : 0,
    title : task,
    done : false
    
    }
    ) 
       
    console.log(tasks) 
      return tasks;
    })
    
  }
   
  doneTask = id => { 
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState( state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
  });
}
  
  deleteTask = (id) => { 
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState( state => {
      let {tasks} = state;
      delete tasks[index]
      return tasks;
  });
}



  render() {
    
      const {tasks} = this.state;
      const activeTasks = tasks.filter(task => !task.done)
      const doneTasks = tasks.filter(task => task.done)

      return(
   
      <div className = "App">
      <h1 className="top">Active tasks: {activeTasks.length}</h1>
      {[...activeTasks,...doneTasks].map( task => (<Task
       doneTask ={()=> this.doneTask(task.id)}
       deleteTask ={()=> this.deleteTask(task.id)}
      task={task}
      key={task.id}/>))}
      <Taskinput addTask = {this.addTask}></Taskinput>
      <Random addTask = {this.addTask}/>
      </div>
       
 
 
 
      )
    }

}


export default App;