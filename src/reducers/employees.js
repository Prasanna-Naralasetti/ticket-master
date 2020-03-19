const initialEmployees=[]
const employeesReducer = (state = initialEmployees,action)=>{
    switch(action.type){
          case 'SET_EMPLOYEES':{
              return [...action.payload]
          }
        case 'ADD_EMPLOYEE': {
            return [...state,action.payload]
        }
        case 'EDIT_EMPLOYEE':{
            return state.map(employee=>{
                if(employee._id==action.payload.id){
                    return {...employee,...action.payload}
                }else{
                    return {...employee}
                }
            })
        }
        case 'REMOVE_EMPLOYEE':{
            return state.filter(empl=>empl._id!=action.payload)
        }
        default:{
            return [...state]
        }
    }
}
export default employeesReducer