import { createSlice,current } from '@reduxjs/toolkit'

 

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{items:[
  //   {id:0,photo:"./logo.png",price:200,weight:"kg",priceUnit:10,quantity:20,name:"test is work",baseQuantity:0.5},
  // {id:1,photo:"./logo.png",price:200,weight:"g",priceUnit:2,quantity:3,name:"test is work2",baseQuantity:2}

],totalPrice:0,counter:0,currency:"eur",Symbol:"€",currencyValue:1,locale:"ar"},
  reducers:{
    adjustQuantity: (state,action) => {
        //passing the index in action.payload
        console.log(current(state),action.payload)
      state.items[action.payload.idx].quantity = action.payload.quantity
      console.log(current(state),action.payload)

     state.items[action.payload.idx].price = action.payload.quantity*state.items[action.payload.idx].priceUnit
let sum =0;
state.items.forEach(element => {
  sum+=element.price;
});
state.totalPrice=sum;

    },
    adjustcurr:(state,action)=>{
        state.currency= action.payload.curr;
        state.Symbol=action.payload.sym;
        state.currencyValue=action.payload.value;

    },
    removeProduct: (state,action) => {
      state.totalPrice=state.totalPrice-state.items[action.payload.idx].price;
      state.items.splice(action.payload.idx,1)
      state.counter-=1;
      },
    addProduct(state, action)  {
        console.log('before',action.payload,{state}, current(state))
        if(state.items.length>0)
        {
            const res =state.items.findIndex((value)=>{return value.id == action.payload.id})
            if(res == -1)
            {
                
                 state.items.push(action.payload)
                 state.counter+=1; 
                 let sum =0;
                 state.items.forEach(element => {
                                                sum+=element.price;
                                                });
                state.totalPrice=sum;
                
            }
            else
            {
              state.items[res].quantity = action.payload.quantity
              state.items[res].price = action.payload.quantity*state.items[res].priceUnit
              let sum =0;
              state.items.forEach(element => {
                                              sum+=element.price;
                                             });
              state.totalPrice=sum;
            }
        }
        else
        {   
            
            state.items.push(action.payload)
            state.counter+=1; 
            let sum =0;
            state.items.forEach(element => {
                                            sum+=element.price;
                                           });
              state.totalPrice=sum;

         }
       
      
    },
     
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, adjustQuantity,adjustcurr } = counterSlice.actions

export default counterSlice.reducer