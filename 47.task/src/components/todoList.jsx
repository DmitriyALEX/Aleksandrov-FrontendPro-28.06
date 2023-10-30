import React from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, delTodo} from "../redux/actions";

export const TodoList = () => {
    const [inputValue, setInputValue] = React.useState('');
    const todos = useSelector(state => state.someReducers);

    const dispatch = useDispatch();

    function getInputValue(text) {
        return setInputValue(text.target.value)
    };

    function addItem() {
        if(inputValue === '') {
            alert('write something')
        } else {
            let allTodo = {
                id: Date.now(),
                content: inputValue,
            }
            setInputValue('')
            dispatch(addTodo(allTodo))
        }
    }

    function delItem() {
        dispatch(delTodo(todos))
    };

    return (
        <div>
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
                {todos.map((item, index) => {
                    return ( 
                        <div className="card_item" key={item.id}>
                            <ul>
                                <li>{item.content}</li>
                                <li>
                                    <button 
                                        onClick={() => (delItem(index))}
                                        className="del_btn"
                                    >del</button> 
                                </li>
                            </ul>
                        </div>
                    )})   
                }
            </div>
        </div>
    )
}