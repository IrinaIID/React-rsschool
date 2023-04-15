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
    },
});

export const {addCardForm} = cardsFormSlice.actions;

export default cardsFormSlice.reducer;