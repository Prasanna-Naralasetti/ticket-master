const initialCustomers=[]
const customerReducer = (state = initialCustomers,action)=>{
    switch(action.type){
        case 'ADD_CUSTOMER': {
            return [...state,action.payload]
        }
        case 'SET_CUSTOMERS':{
            return [...action.payload]
        }
        case 'EDIT_CUSTOMER':{
            return state.map(customer=>{
                if(customer._id==action.payload.id){
                    return {...customer,...action.payload}
                }else{
                    return{...customer}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}
export default customerReducer