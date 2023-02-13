import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./employeesSlice";
export const store = configureStore({
    reducer: {
        employeeN : employeeReducer
    }
})