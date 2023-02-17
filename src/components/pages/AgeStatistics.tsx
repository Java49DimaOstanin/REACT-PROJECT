import React from 'react';
import {Box, Typography} from "@mui/material";
import { statAge } from '../../utils/EmployeeService';
import {useSelector} from 'react-redux';
import { Employee } from '../../model/Employee';
import { Statistics } from '../Statistics';

export const AgeStatistics: React.FC = () => {
    // const employees = useSelector<any, Employee[]>(state => state.employees.employees)
    return <Box>
        <Statistics statisticsName={'Age Statistics'} statisticsType={'Age'} ></Statistics>
    </Box>
}