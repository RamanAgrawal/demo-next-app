import { createSlice,Slice} from '@reduxjs/toolkit'
import {  fetchData } from './cardDetailsThunk';
interface CardState{
    items:Array<any>;
    status:string
}
const initialState:CardState = {
items:[],
status:'idle'

}

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
            state.items=action.payload
            console.log(action.payload);
            
        })
},
});

export const selectItems=  (state:{card:CardState})=>state.card.items

export default cardData.reducer