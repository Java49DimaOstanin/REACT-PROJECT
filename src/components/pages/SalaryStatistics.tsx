import React from 'react';
import {Box, Typography} from "@mui/material";

import { Statistics } from '../Statistics';



export const SalaryStatistics: React.FC = () => {
   
  return <Box>
  <Statistics statisticsName={'Salary Statistics'} statisticsType={'Salary'}></Statistics>
</Box>
}