import { Employee } from "../model/Employee";
import  emplConfig  from '../config/employee-config.json';
import { getRandomNumber,getRandomDate } from "./random";
import { Statistics } from "../model/statisticsType";
// import { useSelector } from "react-redux";

export function statAge(employee:Employee[]):Statistics{
    let statistics:Statistics = employee.reduce((result, employee) =>{
        result.min = result.min< Date.parse(employee.birtDate)? result.min : Date.parse(employee.birtDate);
        result.max = result.max> Date.parse(employee.birtDate) ? result.max : Date.parse(employee.birtDate);
        result.avg += Date.parse(employee.birtDate);
        return statistics;
      },{min:emplConfig.MaximalBirthYear,max:emplConfig.MinimalBirthYear,avg:0})
      statistics.avg =  Math.trunc(statistics.avg/employee.length);

      return statistics;
}

export function statSalary(employee:Employee[]):Statistics {
    let statistics:Statistics = employee.reduce((result, employee) =>{
      result.min = result.min<employee.salary ? result.min : employee.salary;
      result.max = result.max>employee.salary ? result.max : employee.salary;
      result.avg += employee.salary;
      return statistics;
    },{min:emplConfig.MaximalSalary,max:emplConfig.MinimalSalary,avg:0})
    statistics.avg = Math.trunc(statistics.avg/employee.length);
    return statistics;
}

export function creatRandomEmployee():Employee{
  const names:string[] = ["Petya","Vasya","Timon","Pumba","Kuzia","Vinni","Cheburashka",
"Gena","Alona","Jasmin","Katia"];
//    const emplSelect:Employee[] = useSelector<any,Employee[]>(state => state.employeesName.addEmployee) ;
   const newEmployee :Employee = {
    id: getRandomNumber(emplConfig.MinimalValueOfID,emplConfig.MaximalValueOfID),
    // id: getUniqueId(emplSelect),
    name: names[getRandomNumber(0, names.length)],
    birtDate: getRandomDate(emplConfig.MinimalBirthYear,emplConfig.MaximalBirthYear).toISOString().slice(0,10),
    department: emplConfig.DepartmentNames[getRandomNumber(0,emplConfig.DepartmentNames.length)],
    salary: getRandomNumber(emplConfig.MinimalSalary,emplConfig.MaximalSalary)
   }
   return newEmployee;
}
// function getUniqueId(employee:Employee[]):number{
//     let randomID:number = getRandomNumber(emplConfig.MinimalValueOfID,emplConfig.MaximalValueOfID)
//      if(employee.filter())


//     return randomID;
// }