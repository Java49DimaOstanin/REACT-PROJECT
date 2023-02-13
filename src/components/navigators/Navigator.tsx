import { Link, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../model/NavigatorProps"
import '../navigators/navigators.css'
// import { Box ,AppBar} from '@mui/system';
import { Box ,AppBar,Tabs,Tab} from '@mui/material';
import React from "react";

export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) => {
    const [tabNumber,setTabNumber] = React.useState(0);
    function changeTabNumber(event:any , newNumber:number){
       setTabNumber(newNumber);
       

    }
    return <Box sx={{marginTop:"10vh"}}>
<AppBar sx={{backgroundColor:"pink"}}>
    <Tabs value={tabNumber} onChange={changeTabNumber}>
     {getNavItems(routes)}
    </Tabs>
</AppBar>
<Outlet></Outlet>
    </Box> 
    // <div>
    //     <nav>
    //         <ul className={className}>
    //             {getNavItems(routes)}l,.
    //         </ul>
    //     </nav>
    //     <Outlet></Outlet>
    // </div>
}
function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
    return routes.map((r,index) => <Tab component={Link} to={r.path} label={r.label} key={index}/>)
    
    
    // return routes.map((r, index) => <li className="navigator-item" key={index}>
    //     <NavLink to={r.path} style={({isActive}) => getActiveProps(isActive)}>{r.label}</NavLink>
    // </li>)
}
function getActiveProps(isActive: boolean) : React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = {backgroundColor: "blue", color: "white", fontSize: "1.2em"}
    }
    return res;
}