import axios from '../config/axios'

export const setDepartments=(departments)=>{
    return{type:'SET_DEPARTMENTS',payload:departments}
}

export const startSetDepartments=()=>{
    return(dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then((response)=>{
            //console.log(response)
            const departments=response.data
            dispatch(setDepartments(departments))
        })
    }
}

export const removeDepartment = (id)=>{
    return { type: 'REMOVE_DEPARTMENT', payload: id}
}
export const startRemoveDepartment=(id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then((response)=>{
            //console.log(response)
            const department=response.data
            dispatch(removeDepartment(department))
        })
    }
}

export const addDepartment = (Department)=>{
    return { type: 'ADD_DEPARTMENT', payload: Department}
}
export const startAddDepartment=(formData)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then((response)=>{
            const Department=response.data
            dispatch(addDepartment(Department))
        })
    }
}