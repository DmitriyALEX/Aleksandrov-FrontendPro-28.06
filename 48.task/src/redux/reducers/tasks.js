import { ADD_TODO, DEL_TODO, GET_TODO } from "../actions";

const initialState = [];

export const someReducers=(state = initialState, action) => {
    switch(action.type) {
        case GET_TODO: {
            return [...state, action.payload]
        }
        case ADD_TODO: {
            return [...state, action.payload]
        }
        case DEL_TODO: {
            const del = state.filter(todo => todo.id === action.payload)
            return del
        } 
        default: return state;
        
    }
}