import { Employee } from "../model/Employee";
import { getRandomNumber } from "../utils/random";
import employeeConfig from '../config/employee-config.json'
import {app}   from  '../config/firebase-config' ;
import { getFirestore,getDocs, setDoc,doc,deleteDoc, collection} from "firebase/firestore";
const EMPLOYEES = "employees";



export class CompanyFirebase {
    private employeesCol = collection(getFirestore(app), EMPLOYEES)
    private employees: Employee[] = [];
   async addEmployee(empl: Employee):Promise<void> {
        empl.id = getUniqueEmployeeId(this.employees);
        
       this.updateEmployee(empl)
    }
   async updateEmployee(empl: Employee):Promise<void> {
        await setDoc(doc(this.employeesCol, empl.id.toString()),empl);
    }
    
   async removeEmployee(id: number):Promise<void> {
    await deleteDoc(doc(this.employeesCol,id.toString()));
    }
   async getAllEmployees():Promise<Employee[]> {
        const docsSnapshot = await getDocs(this.employeesCol);
          return docsSnapshot.docs.map(doc => doc.data() as Employee);
    }
}
function getUniqueEmployeeId(employees:Employee[]):number {
    const {minId,maxId } = employeeConfig;
    let id:number = getRandomNumber(minId,maxId);
    while(employees.findIndex(emp => emp.id === id) >= 0) {
        id = getRandomNumber(minId,maxId);
    }
    return id;
}