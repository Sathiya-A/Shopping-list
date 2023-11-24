  
    
    import React, { useState } from 'react';
    import '../css/shopping_list.css';
    import AddElement from './AddElement';
    import BootstrapSwitchButton from 'bootstrap-switch-button-react'    
    
    export default function ShoppingList() {
        const [tasks, setTasks] = useState([]);
    
        const addTask = title => {
            const newTasks = [...tasks, { title,completed:'true' }];
            setTasks(newTasks);
        };
    
      
    
        const removeTask = index => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        };

        const handeltoggle=index=>{
            const newTasks = [...tasks];
            newTasks[index].completed=(!newTasks[index].completed);
            setTasks(newTasks);
        }
    
        return (
            <div className="todo-container">
                <div className="header">Shopping list</div>
                <div>Total items:{tasks.length}</div>
                <div className="create-task" >
                    <AddElement addTask={addTask} />
                    
                </div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        
                        <div
                        className="task"
                        key={index}
                       
                    >
                        {task.title}
                        
                       {task.completed?

                        <BootstrapSwitchButton
                        onstyle="success"
                        offstyle="danger"
                        size='sm'
                        width={80}
  
    onlabel='Done'
    offlabel='To do'
   onChange={(e)=>{
    handeltoggle(index)
   }}
    
/>

:


<BootstrapSwitchButton
onstyle="success"
offstyle="danger"
size='sm'
width={80}

onlabel='Done'
offlabel='To do'
onChange={(e)=>{
handeltoggle(index)
}}

/>

                       }

                        <button type="button" className="btn-close btn-close-white close" aria-label="Close" onClick={() => removeTask(index)}></button>
                    </div>
                    ))}
                </div>
               
            </div>
        );
    }
    
    

 


    