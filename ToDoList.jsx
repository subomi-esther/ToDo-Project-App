
import React, { useState, useEffect } from 'react'
import axios from 'axios'

    function ToDoList() {
        const [tasks, setTasks ] = useState([]); // array of tasks
        const [newTask, setNewTask ] = useState (""); //empty string  for new tasks
        
        
        useEffect(() => {
            axios
              .get('https://jsonplaceholder.typicode.com/todos')
              .then((response) => {
                setTasks(response.data) ; console.log(response.data)
              })
          }, [])
        
    
        function handleInputChange(event) {
            setNewTask(event.target.value);
        }
    
        function addTask() {
            if(newTask === "") return;
            setTasks(t =>[...t, newTask]);
            setNewTask("");
        }
    
        function deleteTask(index) {
            const deletedTasks = tasks.filter((_, i) => i !== index);
            setTasks(deletedTasks);
    
        }
    
        function updateTask(index) {
            const updatedTasks = [...tasks];
            const newTask = prompt("Enter a new task");
            if(newTask === "") return;
            updatedTasks[index] = newTask;
            setTasks(updatedTasks); 
        }
    
    
        return(
             
            <div className="to-do-list">

                <div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="">Error Page</a></li>
                            <li><a href="">404 Page</a></li>
                            
                            

                        </ul>
                    </nav>
                </div>

               
                <h1>My ToDo</h1>
    
                <div>
                    <input  
                      type="text"
                      placeholder="Enter a task" 
                     value={newTask} 
                      onChange={handleInputChange}/>
    
                    <button
                     className="add-button"
                     onClick={addTask}>
                     Add Task
                    </button>
                </div>
    
                <ol>

                    
                    { tasks.length > 0 ?
                
                    tasks.map((task, index) =>
                       <li key={index}>
                              <span className="text">{task.title}</span>
                                <button 
                                  className="delete-button"
                                  onClick={() => deleteTask(index)}>
                                    ✖️
                                </button>
    
                                <button 
                                  className="update-button"
                                 
                                  onClick={() => updateTask(index)}>
                                  🖊️
                                  
                                </button>
                             
                        </li>      
    
                      
    
                    ) : <p>No tasks</p>}
                </ol>

                
    
    
            </div>


        )
        
        
        
    }

    

  

 


export default ToDoList