import React from 'react';
import {Box, Button} from "@mui/material";
import {useDispatch} from 'react-redux';
import { employeesActions } from '../../redux/employeesSlice';
import { createRandomEmployee } from '../../utils/EmployeeService';
export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();
    return <Box>
        <Button onClick={() => 
            dispatch(employeesActions.addEmployee(createRandomEmployee()))}>
                Add Random Employee
            </Button>
    </Box>
}