import React from 'react';
import {Box, Button} from "@mui/material";
import {useDispatch} from 'react-redux';
import { employeesActions } from '../../redux/employeesSlice';
import { createRandomEmployee } from '../../utils/EmployeeService';
import { EmployeeForm } from '../forms/EmployeeForm';
import { Employee } from '../../model/Employee';
export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();
    return <EmployeeForm submitFn={(employee) => {dispatch(employeesActions.addEmployee(employee))
        return true;
        }}/>
}