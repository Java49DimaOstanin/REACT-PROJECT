import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../../redux/employeesSlice';
import { creatRandomEmployee } from '../../utils/EmployeeService';

export const AddEmployee :React.FC = () => {
const dispach = useDispatch();

return <Button onClick={() => dispach(employeeActions.addEmployee(creatRandomEmployee))}> 
Add Employee
</Button>
}