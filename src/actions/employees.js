import axios from '../config/axios'

export const setEmployees = (employee) => {
    return { type: 'SET_EMPLOYEES', payload: employee }
}

export const startSetEmployees = () => {
    return (dispatch) => {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        }).then((response) => {
            //console.log(response)
            const employee = response.data
            dispatch(setEmployees(employee))
        })
    }
}


 export const addEmployee = (employee)=>{
  return{type:'ADD_EMPLOYEE',payload:employee}
 }
 export const startAddEmployee=(formData,redirect)=>{
     return(dispatch)=>{
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
       }).then((response)=>{
           //console.log(response)
              const employee=response.data
              dispatch(addEmployee(employee))
              redirect()
        })
    }
}

export const editEmployee = (employee) => {
    return { type: 'EDIT_EMPLOYEE', payload: employee }
}
export const startEditEmployee = (formData,id,redirect) => {
    return (dispatch) => {
        axios.put(`/employees/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        }).then((response) => {
            //console.log(response)
            const employee = response.data
            dispatch(editEmployee(employee))
            redirect()
        })
    }
}

export const removeEmployee = (id) => {
    return { type: 'REMOVE_EMPLOYEE', payload: id }
}
export const startRemoveEmployee = (id) => {
    return (dispatch) => {
        axios.delete(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        }).then((response) => {
           // console.log(response)
             const id = response.data
             dispatch(removeEmployee(id))
           
        })
    }
}


// export const getemployee = (employee)=>{
//     return { type: 'GET_EMPLOYEE', payload: employee}
// }
// export const startGetEmployee = () => {
//     return (dispatch) => {
//         axios.get('/employees', {
//             headers: {
//                 'x-auth': localStorage.getItem('authToken')
//             }
//         }).then((response) => {
//             //console.log(response)
//            const employee=response.data
//            dispatch(getemployee(employee))
            
//         })
//     }
// }