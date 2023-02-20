import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
// import  './table.css';
import { Delete } from '@mui/icons-material';
import { employeesActions } from '../../redux/employeesSlice';


export const Employees: React.FC = () => {
   const dispach = useDispatch()
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    const columns = React.useRef<GridColumns>([
        {field: "name",headerClassName:"header", headerName: "Employee Name",flex: 1,headerAlign:"center",align:"center"},
        {field: "birthDate",headerClassName:"header", headerName: "Date of Birth",flex:1,type:"date",headerAlign:"center",align:"center"},
        {field: "department",headerClassName:"header", headerName: "Department",flex:1,headerAlign:"center",align:"center"},
        {field: "salary",headerClassName:"header", headerName: "Salary (NIS)",flex:0.8,type:"number",headerAlign:"center",align:"center"},
        {field: "actions" , type: "actions",getActions:(params) => {
            return [
                <GridActionsCellItem label='remove' icon={<Delete/>} onClick={(() => dispach(employeesActions.removeEmployee(+params.id)) )} />
            ]
        }}
    ])
    return <Box sx={{height: "80vh",width:"80vw"}}>
       <DataGrid columns={columns.current} rows={employees}/>
    </Box>
}

