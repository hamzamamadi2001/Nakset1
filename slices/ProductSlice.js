import { createSlice,current } from '@reduxjs/toolkit'
 

 

 
//  {
//   id:null,
//   name:null,
//   price:null,
//   quantity:null,
//   photo:null,
//   unit:null,
// }

export const productSlice = createSlice({
  name: 'product',
  initialState:{items:[],conuter:0},
  reducers:{
    adjustQuantity: (state,action) => {
        //passing the index in action.payload
      state.items[action.payload.idx].quantity = action.payload.quantity
      state.items[action.payload.idx].price = action.payload.quantity*state[action.payload.idx].price


    },
    removeProduct: (state,action) => {
      state.items.splice(action.payload.idx,1)
    },
    addProduct(state, action)  {
        console.log('before',action.payload,{state}, current(state))
        if(state.items.length!=0)
        {
            const res =state.items.findIndex((value)=>{return value.id == action.payload.id})
            if(res == -1)
            {
                
                 state.items.push(action.payload) 
                
            }
            else
            {
                state.items[res].quantity = action.payload.quantity
                state.items[res].price = action.payload.quantity*state.items[res].price
            }
        }
        else
        {   
            
            state.items.push(action.payload)
         }
       
      
    },
     
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, adjustQuantity } = productSlice.actions

export default productSlice.reducer