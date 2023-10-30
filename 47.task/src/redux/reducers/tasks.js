import { ADD_TODO, DEL_TODO } from "../actions";

const initialState = [];

export const someReducers=(state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [...state, action.payload]
        }
        case DEL_TODO: {
            return state.filter(todo => todo.id === action.payload)
        }   
        default: return state;
    }
}