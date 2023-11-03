import React from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendTodo, removeTodo } from "../redux/asyncActions";

export const TodoList = () => {
    const [inputValue, setInputValue] = React.useState('');
    const todos = useSelector(state => state.someReducers);
    const dispatch = useDispatch();

    const [itemsList, setItemsList] = React.useState([]);

    function getInputValue(text) {
        return setInputValue(text.target.value)
    };

    function addItem() {
        if(inputValue === '') {
            alert('write something')
        } else {
            let allTodo = {
                content: inputValue,
            }
            setInputValue('')
            dispatch(sendTodo(allTodo))
        }
    };

    //GEt all items at first render
    React.useEffect(() => {
        fetch('https://64465a990431e885f00fab2d.mockapi.io/todo')
        .then(res => res.json())
        .then(data => setItemsList(data)) 
    }, []);

    function delItem(id) {
        dispatch(removeTodo(id))
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
                                        onClick={() => (delItem(item.id))}
                                        className="del_btn"
                                    >del</button> 
                                </li>
                            </ul>
                        </div>
                    )})   
                }
            </div>
            <div className="items_container">
                {itemsList.map((el, idx) => (
                <ul className="items_container_list">
                    <li className="items_container_list_item">
                        {el.content}  
                    </li>
                    <li className="items_container_list_item_button">
                        <button onClick={() => (delItem(el.id))}>
                            del
                        </button>
                    </li>
                </ul>))}
            </div>
        </div>
    )
}