import React from "react";
import tasks50 from "./50tasks.js";
//import defaultExport from "./50tasks";

class Random extends React.Component{ 
    constructor (props) {
        super (props)

        this.state = {
            task : tasks50[0],
            visibility : false,
            pict : 1
        }
    }
    
    setVisibility = () => {
        if (this.state.pict == 1) {
        document.querySelector(".bones").src = "bones1.jpg";
        this.setState({pict : 0})}
        else {
            document.querySelector(".bones").src = "bones.jpg";
            this.setState({pict : 1})
             }
        if (this.state.visibility === true) {
            this.setState({visibility : false})
            
        } else {
            this.setState({visibility : true})
        } }
        
    createRandomTask = () => {
        tasks50.sort(() => Math.random() - 0.5)
        console.log(tasks50[0])
        this.setState({ task : tasks50[0]})
    
    }    
    
    addTask = () => {
     let {task} = this.state;
        this.props.addTask(task)
    }

    render () {
 
        
        return (
            <div>
            <div className = "randombar">
                <h2> Go to lazy TODO</h2>
               <button onClick = {this.setVisibility} className = "btn-random"><img className = "bones" src = "bones1.jpg"></img></button>
            </div>
            { this.state.visibility &&<div className = "taskGenerator">
                <p><em>if you are boared and have nothing to do - create random task and have fan</em></p>
                <h2 id = "putTask">{this.state.task}</h2>
                <div className = "btn-create">
                <button onClick = {this.createRandomTask} className = "btn btn-1">Next </button>
                <button onClick = {this.addTask} className = "btn btn-2">Add a random task</button>
                </div>
                <p className = "by">by AntonCreator ⓒ</p>
            </div>}
            </div>
        )
    }
}


export default Random