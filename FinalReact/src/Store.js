import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'potato', price: 120 },
            { name: 'tomato', price: 150 }
        ],
        nonveg: [
            { name: 'chicken', price: 220 },
            { name: 'fish', price: 400 }
        ]
    },
    reducers: {},
});


const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart : (state,action)=>{
            const status = state.find(item=>item.name === action.payload.name);
            {
                if(status)
                {
                    status.quantity+=1;
                }
                else{
                    state.push({...action.payload,quantity:1});
                }
            }
        },
        increment:(state,action)=>
        {
            const status = state.find(item=>item.name === action.payload.name)
            if(status)
            {
                status.quantity +=1;
            }
        },
        decrement :(state,action)=>
        {
            const item = state.find(item=>item.name === action.payload.name)
            if(item.quantity > 1  )
            {
                item.quantity -=1;
            }
            else
            {
             return state.filter(item=>item.name!=action.payload.name)
            }
        },
        removing:(state,action)=>
        {
          
           return state.filter(item=>item.name!=action.payload.name)
        }
        
    }
});
export const {addtocart,increment,decrement,removing} = cartslice.actions;


const store = configureStore({
    reducer: { products: productsSlice.reducer,
        cart : cartslice.reducer

     }
   
});

export default store;
