import React, { useState } from 'react';
import { Trash } from 'lucide-react';

const Todo = () => {
    const [initial, setInitial] = useState(""); 
    const [data, setData] = useState([]);
    const maxwords =10 ;

    const getInput = (event) => {
        setInitial(event.target.value);

    };

    const getData = () => {
      if(initial.trim()==''|| initial=='0'){
         alert("Enter Task First ")
      } 
   else{
      let store = [...data, initial];
      setData(store);
      setInitial(""); 
   }
    };

    const deleteTask = (index) => {
        let filterData = data.filter((_, id) => id !== index);
        setData(filterData);
    };

    return (
        <>
            <div className="container">
                <div className="inputTask">
                    <input 
                        onChange={getInput} 
                        className="text-black" 
                        value={initial} 
                        type="text"  
                        placeholder="Enter your Task" 
                    />
                    <button onClick={getData}>Add</button>
                </div>
                {data.map((curValue, index) => {
                    return (
                        <div className="taskData" key={index}> 
                            <p>{curValue}</p>
                            <div onClick={() => deleteTask(index)} className="flex items-center mr-3">
                                <Trash />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Todo;
