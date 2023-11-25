import React, { useState } from 'react';
import "./Mycss.css";


const MyTodo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [itemsc, setItemsc] = useState([]);

    const addItem = () => {
        if (!inputData) {

        }
        else{
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const comItems = (y) => {
        // console.log(y);
        const updateitems = items.filter((x) => {
            setItemsc([...itemsc, y]);
            return x !== y;
             
        });
        setItems(updateitems);  
            
    }   

  return (
    <>
     <div className="maindiv">
        <div className="seconddiv">
            <h1>🗒️ToDo List</h1>
            <div className="thirddiv">
                <input type='text' placeholder='✍️ Write Here...'
                    value= {inputData}
                    onChange = {(event) => setInputData(event.target.value) }
                /> 
                <i className="fa fa-plus add-btn pluse" title="Add" onClick={addItem}></i>
            </div>

            <div className="bgcolor">

                {
                    items.map((elem, ind) => {
                        return (

                            <div key={ ind } className="taskadd">
                                <h3>{ elem }
                                <span className="check"><i className="fa fa-check-square-o" title="Complete" onClick={ () => comItems(elem)}></i></span>
                                </h3>
                                
                            </div>

                        )
                    })
                }   
               
            </div>

            <div className="bgcolor">
                <h2>Complete Task 👊</h2>
                {
                    itemsc.map((elem, ind) => {
                        return (

                            <div key={ ind } className='comdiv'>
                                <h3>{ elem } 👍</h3>
                            </div>
                        )
                    })
                }  

                
            </div>

            <div>
           
            </div>
        </div>
     </div> 

     <div className="footer"></div>
    </>
  )
}

export default MyTodo
