import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Statistics } from '../../model/statisticsType';
import { statSalary } from '../../utils/EmployeeService';
import { Employee } from '../../model/Employee';
import { useSelector } from 'react-redux';


export const AgeStatistics :React.FC = () => {
    const emplSelect:Employee[] = useSelector<any,Employee[]>(state => state.employeesName.addEmployee) ;
 
    function getStat():JSX.Element {
        let stat:Statistics = statSalary(emplSelect) ;
        let retStat:JSX.Element;
      if(emplSelect.length == 0) {
        retStat = <Typography sx={{fontSize:"1.5em"}}>Age Statistics: no Statistics</Typography>
      }else{
        retStat = <Typography sx={{fontSize:"1.5em"}}>{"Salary Statistics:    Min:  "+
        new Date(stat.min) + " max:  " + new Date(stat.max) + " Average:  " + new Date(stat.avg )  }</Typography>
      }
        return retStat;
    }

return <Box>
    {getStat()}
</Box>}

