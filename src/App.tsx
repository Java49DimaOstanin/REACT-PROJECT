import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
// import employeeConfig from './config/employee-config.json'
import { layoutConfig } from './config/layout-config';
import { Employees} from './components/pages/Employees';
import { AddEmployee} from './components/pages/AddEmployee'
import { AgeStatistics} from './components/pages/AgeStatistics';
import { SalaryStatistics} from './components/pages/SalaryStatistics'

function App() {


  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator className={layoutConfig.className}
           routes={layoutConfig.routes} />}>
             <Route index element={<Employees/>}></Route>
             <Route  path='addEmployee' element={<AddEmployee/>}></Route>   
             <Route  path='ageStatistics' element={<AgeStatistics/>}></Route>  
             <Route  path='salaryStatistics' element={<SalaryStatistics/>}></Route>             
          </Route>
              
      </Routes>
  </BrowserRouter>

}
export default App;