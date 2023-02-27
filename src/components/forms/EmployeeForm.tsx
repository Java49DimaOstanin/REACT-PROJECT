import React, { useState } from "react";
import { FormControl, TextField,InputLabel,Select,Box ,MenuItem ,Button} from "@mui/material";
import employeeConfig from '../../config/employee-config.json';
import { Employee } from "../../model/Employee";
type Props = { 
   submitFn:(empl:Employee)=> boolean,
   employeeUpdate?: Employee

}
const initialEmployee:Employee = {id :0 ,birthDate:"",name:'',department:'',salary:0};
export const EmployeeForm :React.FC<Props> = ({submitFn, employeeUpdate}) =>{

    const {minBirthYear, minSalary, maxBirthYear,maxSalary,departments} = employeeConfig;
    const [employee, setEmployee] = useState<Employee>(employeeUpdate ? employeeUpdate : initialEmployee);

    function handlerName (event:any) {
        const name = event.target.value;
        const emplCopy = {...employee};
        emplCopy.name = name;
        setEmployee(emplCopy);
    }
    function handlerBirthDate (event:any) {
        const birthDate = event.target.value;
        const birthDateCopy = {...employee};
        birthDateCopy.birthDate = birthDate;
        setEmployee(birthDateCopy);
    }
    function handlerSalary (event:any) {
        const salary:number = +event.target.value;
        const salaryCopy = {...employee};
        salaryCopy.salary = salary;
        setEmployee(salaryCopy);
    }

    function handlerDepartment (event:any) {
        const department = event.target.value;
        const departmentCopy = {...employee};
        departmentCopy.department = department;
        setEmployee(departmentCopy);
    }
    function onSumbmitFn(event: any){
        event.preventDefault();
        submitFn(employee);
        document.querySelector('form')!.reset();
    }
    function onResetFn(event:any){
        setEmployee(employeeUpdate ? employeeUpdate : initialEmployee);
    }

    return <Box>
        <form onSubmit={onSumbmitFn} onReset={onResetFn}>
            <FormControl fullWidth required>
              <InputLabel id='select-department-id'> Department</InputLabel>
              <Select labelId='select-department-id' label='deparment' value={employee.department} onChange={handlerDepartment}>
                <MenuItem value=''>None</MenuItem>
                {departments.map(dep => <MenuItem value={dep}>{dep}</MenuItem>)}

              </Select>
            </FormControl>
            <TextField type='text' required fullWidth label='Employee Name'
            helperText="enter Employee name" onChange={handlerName} value={employee.name} inputProps ={{
                readOnly: !!employeeUpdate
            }}/>
            <TextField type={"date"} required fullWidth label={"birthDate"} value={employee.birthDate} inputProps={{
                readOnly: !!employeeUpdate,
                min:`${minBirthYear}-01-01`,
                max: `${maxBirthYear}-12-31`
            }}
             InputLabelProps = {{
                shrink: true
            }} 
            onChange={handlerBirthDate}/>
            <TextField label='salary' fullWidth required type='number' onChange={handlerSalary} helperText={`enter salary in range [${minSalary}-${maxSalary}]`}
            inputProps = {{
                min:`${minSalary}`,
                max:`${maxSalary}`
            }}/>
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
        </form>

    </Box>
}