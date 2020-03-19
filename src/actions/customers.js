import axios from '../config/axios'

export const setCustomers=(customers)=>{
    return{type:'SET_CUSTOMERS', payload:customers}
}

 export const startSetCustomers=()=>{
    return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           
            const customers=response.data
            dispatch(setCustomers(customers))
        })
    }
}

export const addCustomer = (addForm)=>{
    return { type: 'ADD_CUSTOMER', payload: addForm}
};

export const startAddCustomer=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/customers',formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                const addForm = response.data
                dispatch(addCustomer(addForm))
                redirect()
            })
        }
    }
        export const editCustomer=(customer)=>{
            return{type:'EDIT_CUSTOMER',payload:customer}
        }
     export const startEditCustomers=(formData,id,redirect)=>{
         return(dispatch)=>{
             axios.put(`/customers/${id}`,formData,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
             }).then((response)=>{
                 const customer=response.data
                 dispatch(editCustomer(customer))
                 redirect()
             })
         }
     }
