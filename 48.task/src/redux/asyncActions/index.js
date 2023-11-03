import { addTodo } from "../actions";

// import { getTodo } from "../actions"

// export const fetchTodo = () => {
//     return function(dispatch) {
//         fetch('https://64465a990431e885f00fab2d.mockapi.io/todo')
//         .then(res => res.json())
//         .then(data => dispatch(getTodo(data)))
//     }
// }

export const sendTodo = (payload) => {
    return function(dispatch) {
        fetch('https://64465a990431e885f00fab2d.mockapi.io/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload) 
        })
        .then(res => res.json())
        .then(data => dispatch(addTodo(data)))
        .catch(error => console.error(error));
    }
}

export const removeTodo = (payload) => {
    return function() {
        fetch(`https://64465a990431e885f00fab2d.mockapi.io/todo/${payload}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .catch(error => console.error(error));
    }
}

