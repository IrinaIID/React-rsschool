import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardInfo } from '../utils/types/types';


let cardObj: CardInfo[] = [];

const cardsFormSlice = createSlice({
    name: 'cardsForm',
    initialState: {
      cardsForm: cardObj,
    },
    reducers: {
        addCardForm(state, action) {
            state.cardsForm.push(action.payload);
        },
        // toggleComplete(state, action) {
        //     const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
        //     toggledTodo.completed = !toggledTodo.completed;
        // },
        // removeTodo(state, action) {
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        // }
    },
});

export const {addCardForm} = cardsFormSlice.actions;

export default cardsFormSlice.reducer;