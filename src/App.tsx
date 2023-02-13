import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
import { Products } from './components/navigators/Products';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { layoutConfig } from './config/layout-config';
// import { productsConfig } from './config/products-config';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function App() {


  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator className={layoutConfig.className}
           routes={layoutConfig.routes}  />}>
              <Route index element={<Home/>}></Route>
              <Route path='customers' element={<Customers/>}/>
              <Route path='orders' element={<Orders/>}></Route>
              {/* <Route path='products' element={<Navigator
               className={productsConfig.className} routes={productsConfig.routes}/>}>
                    <Route path='dairy' element={<DairyProducts/>}/>
                    <Route path='bread' element={<BreadProducts/>}/>
              </Route> */}
          </Route>
              
      </Routes>
  </BrowserRouter>
// return <Box sx={{width:"50vw",height:"50vh", border:"solid 1px red",backgroundColor:{xs:"red",sm:"green",md:"black"}}}>
//   <Typography sx={{height:"100%",color:"yellow",textAlign:"center",fontSize:{sx:"1.2",sm:"2em"},color:{sm:"pink"}}}>WoW CooL</Typography>
// </Box>
}
export default App;