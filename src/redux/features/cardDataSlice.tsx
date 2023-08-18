import { createSlice,Slice} from '@reduxjs/toolkit'
import {  fetchData } from './cardDetailsThunk';


// Define the shape of the card state
interface CardState{
    items:Array<any>;
    status: 'idle' | 'loading' | 'completed'; // Enumerate possible status values
}

const initialState:CardState = {
items:[],
status:'idle'

}
// Createing a slice for card data
const cardData:Slice<CardState> = createSlice({
  name: 'card-data',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
        })
        //when the promise will fullfield this will exicute
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'completed'
            state.items=action.payload  // Store fetched data in the items array
          
        })
},
});


// Selector function to get items from the card state
export const selectItems=  (state:{card:CardState})=>state.card.items

export default cardData.reducer