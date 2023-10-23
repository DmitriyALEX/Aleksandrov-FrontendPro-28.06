import React from "react";
import './styles.css'

export const TodoList = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const [checked, setChecked] = React.useState(true);

    function getInputValue(text) {
        return setInputValue(text.target.value)
    }

    function addItem() {
        //allTodo -- initial value from state
        if(inputValue !== '') {
            setTodo(allTodo => [
                ...todo, {
                    id: Date.now(),
                    content: inputValue,
                }])
        }
        setInputValue('')
    }

    function delItem(index) {
        setTodo(todo => todo.filter((todo, todoIndex) => todoIndex !== index))
    } 

    function isChecked(value) {
        return value.target.checked
    } 

    return (
        <div >
            <div className="input_block">
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={getInputValue}
                />
            </div>
            <div className="btn_add">
                <button
                    onClick={addItem}
                >Add Item</button>
            </div>
            <div className="content_block">
                {
                    todo.map((item, index) => {
                        return ( 
                            <div className="card_item">
                                <ul>
                                    <li>{item.content}</li>
                                    <li>
                                        <div className="checkbox_block">
                                            <input type="checkbox"
                                                value={checked}
                                                onChange={isChecked}
                                            /> 
                                        </div> 
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => (delItem(index))}
                                            className="del_btn"
                                        >del</button> 
                                    </li>
                                </ul>
                            </div>
                        )  
                    })    
                }
            </div>
            
        </div>
    )
}