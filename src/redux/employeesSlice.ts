import { createSlice } from "@reduxjs/toolkit"
import { Employee } from "../model/Employee";

const emps: Employee[] = [];
const initialState = {
    employeesList: emps
}
const employeeSlice = createSlice({
    initialState,
    name : "employeesName",
    reducers:{
        addEmployee:(state,data) =>{
            state.employeesList = state.employeesList.slice();
            state.employeesList.push(data.payload);
        }
    }
})
export const employeeActions = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;