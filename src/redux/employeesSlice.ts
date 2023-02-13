import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    employees: []
}
const employeeSlice = createSlice({
    initialState,
    name : "employeesN",
    reducers:{
        addEmployee:(state,data) =>{
            state.employees = state.employees.slice();
            state.employees.push(data.payload);
        }
    }
})
export const employeeActions = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;