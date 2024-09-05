import {createSlice, current} from '@reduxjs/toolkit'

const initialEmployees = JSON.parse(localStorage.getItem('employees')) || [];

export const employeeSlice = createSlice({
    name: "employee",
    initialState :{
        employees : initialEmployees ,
    },
    reducers: {
        createEmployee :  (state, action) =>{
            const newEmployee = action.payload
            state.employees = [...state.employees, newEmployee]
            localStorage.setItem('employees', JSON.stringify(state.employees));
        }
    }
})

export const {createEmployee} = employeeSlice.actions
export default employeeSlice.reducer