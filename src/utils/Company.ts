// import { Employees } from "../components/pages/Employees";
import { Employee } from "../model/Employee";


export class Company {
    // constructor(private employees:Employee[]){

    // }
    private employees: Employee[] = [];
    addEmployee(empl:Employee):void {
        this.employees.push(empl)

    } 
    updateEmployee(empl:Employee):void{
         const emplUpdate = this.getEmployee(empl.id);
         if (emplUpdate != null){
            emplUpdate.department = empl.department;
            emplUpdate.salary     = empl.salary;
         }
    }
    getEmployee(id:number): Employee | null{
        const index = this.employees.findIndex(e => e.id === id);
        return  index < 0 ? null :  this.employees[index];
    }
    removeEmployee(id: number): void {
        const index = this.employees.findIndex(e => e.id === id);
        index >= 0 && this.employees.splice(index,1);
    }
    getAllEmployees():Employee[] {
        return this.employees.slice();
    }
    }
