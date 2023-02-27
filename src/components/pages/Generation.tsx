import React, { useState } from 'react';
import {Alert, Box, Button, Input,TextField} from "@mui/material";
import {useDispatch} from 'react-redux';
import { employeesActions } from '../../redux/employeesSlice';
import { createRandomEmployee } from '../../service/EmployeeService';
import generationConfig from '../../config/generation-config.json';
import { Form } from 'react-router-dom';




export const Generation: React.FC = () => {
    const dispatch = useDispatch();
    const {minAmount,maxAmount,defaultAmount,alertTimeout} = generationConfig;
    const [amount , setAmount] = React.useState<number>(defaultAmount);
    const [flAlertSuccess, setFlAlertSuccess] = React.useState<boolean>(false);
    function handlerAmount(event:any):void {
        setAmount(+event.target.value);
    }
    function onSubmitFn(event:any) {
        event.preventDefault();
        for(let i = 0; i < amount;i++){
            dispatch(employeesActions.addEmployee(createRandomEmployee()));
        }
        setFlAlertSuccess(true);
        setTimeout(() => setFlAlertSuccess(false),alertTimeout );
    }
    
    return <Box sx={{height:"6vw"}}>
        <Form onSubmit={onSubmitFn}>
            <TextField label="amount of employee generated" fullWidth required type="number" onChange={handlerAmount}
             value={amount}
             helperText={`Enter amount of employee objects in range [${minAmount}-${maxAmount}]`}
             inputProps = {{min: `${minAmount}`, 
                            max :`${maxAmount}`}} />
            <Button type='submit'>Generate Employee</Button>
               
        </Form>
        {flAlertSuccess && <Alert severity='success'> Generated {amount} random employee object </Alert>}
    </Box>
    
    
    
}
