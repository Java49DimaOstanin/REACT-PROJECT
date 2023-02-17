import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import { Employee } from '../model/Employee';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import { statAge,statSalary } from '../utils/EmployeeService';

type InputProps = {
  statisticsName: string;
  statisticsType: "Age" | "Salary"
  
  
}

export const Statistics: React.FC<InputProps> = (props) => {
const employees = useSelector<any, Employee[]>(state => state.company.employees)
const columns = React.useRef<GridColumns>([
    {field: "min"+ props.statisticsType, headerName: "Minimal Value ",flex:1,headerAlign:"center",align:"center" ,type:"number"},
    {field: "max"+ props.statisticsType, headerName: "Maximal Value", flex:1,headerAlign:"center",align:"center" ,type:"number"},
    {field: "avg"+ props.statisticsType, headerName: "Average Value", flex:1,headerAlign:"center",align:"center" ,type:"number"},
])
const emplStat = props.statisticsType == 'Age'? (statAge(employees)):(statSalary(employees));


return <Box sx={{height: "80vh",width:"80vw"}}>
       <Typography sx={{textAlign: "center",fontSize:"1.5em"}}>{props.statisticsName}</Typography>
       <DataGrid columns={columns.current} rows={[{id:0,...emplStat}]}/>
    </Box>
} 