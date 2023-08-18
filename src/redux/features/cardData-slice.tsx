import { createSlice } from '@reduxjs/toolkit'
interface CardStates{
    
}
const initialState:CardStates = {

}

const cardData = createSlice({
  name: 'card-data',
  initialState,
  reducers: {}
});

export const {} = cardData.actions

export default cardData.reducer