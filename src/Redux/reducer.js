import {createSlice} from '@reduxjs/toolkit'


const employeeInitialState = {
    firstName : "",
    lastName:"",
    startDate: "",
    department:"",
    street:"",
    city:"",
    zipCode:""
}

export const employeeSlice = createSlice({
    name: "employee",
    employeeInitialState,
    reducers: {
        createEmployee(state, action){
        const addEmployee = action.payload()
        state.push(addEmployee)
        }
    }
})


export default employeeSlice.reducer