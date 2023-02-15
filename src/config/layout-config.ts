import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        {label: 'Employees', path: '/'},
        {label: 'Add Employee', path: '/addEmployee'},
        {label: 'Age Statistics', path: '/ageStatistics'},
        {label: 'Salary Statistics', path: '/salaryStatistics'}
    ]
}