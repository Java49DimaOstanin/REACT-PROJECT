import { ListItem,List  } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { getRandomColor } from '../../utils/random';
import { Box } from '@mui/system';

export const Employees :React.FC =() =>{
    const employees = useSelector<any,Employee[]>(state =>state.employeesName.employeeList)
    function getEmployees():JSX.Element[]{
    return employees.map((element,index) => {
        const randColor = getRandomColor();
        return <ListItem  sx={{border:"solid 2px ",borderColor:"#"+randColor}}>
      {(index + 1) +"#  |> " + "ID : "+ element.id + "Name : " + element.name + "Birth Date : "+
      element.birtDate + "Department : " + element.department+ "Salary : "+ element.salary  }
        </ListItem>
    })

}
return <Box> <List>
          {getEmployees()}</List>
    </Box>
    }