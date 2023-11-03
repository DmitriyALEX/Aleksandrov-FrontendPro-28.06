export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const GET_TODO = 'GET_TODO';

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload 
    }
}

export const delTodo = (payload) => {
    console.log( payload)
    return {
        type: DEL_TODO,
        payload
    }
}

export const getTodo = (payload) => {
    return {
        type: GET_TODO,
        payload
    }
}