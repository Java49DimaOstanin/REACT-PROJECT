import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginData } from '../../model/LoginData';
import { Alert } from '@mui/material';
import { CodeType } from '../../model/CodeType';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tel-ran.com">
      tel-ran.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
type Props = {
  submitFn: (loginData: LoginData)=>void;
  code:CodeType;
};
const theme = createTheme();

export const LoginForm: React.FC<Props> = ({submitFn,code}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData: LoginData = {username: data.get("username") as string,
  password: data.get("password") as string}
  submitFn(loginData)
  };
  function googleClick(){
    const GOOGLE:LoginData = {username: "GOOGLE",password: "1"};
    submitFn(GOOGLE)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
              {code === 'Credentials Error' && <Alert severity='error' >{code}</Alert>}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography sx={{textAlign:"center"}}>----------OR----------</Typography>
        
        <Button onClick={googleClick} fullWidth variant="text" sx={{backgroundColor:"white",height:"8vh",mt: 3, mb: 2}}>
            <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKGpv_d8UwBnqEw8uq_nm7U0uECy9acmbnw&usqp=CAU"}  height={"100%"} />
           </Button> 
           
           
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      
    </ThemeProvider>
  );
}
