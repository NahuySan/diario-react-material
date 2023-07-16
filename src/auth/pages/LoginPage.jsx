import { useMemo } from "react"
import {Link as RouterLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"


export const LoginPage = () => {


  const {status, errorMessage} = useSelector(state => state.auth)

  const dispatch = useDispatch();
  
  const {email, password, onInputChange} = useForm({
    email: '',
    password: '',
  })

  const isAuthenticating = useMemo(()=> status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword({email, password}))      
  }

  const onGoogleSignIn = () => {
    // console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
        <form 
          onSubmit={ onSubmit }
          className="animate__animated animate__fadeIn"
          sx={{
            pb:20
          }} 
        >
          <Grid 
            container
            zIndex={1}
 
          >
 
            <Grid item xs={12} sx={{mt:2,}}>
              <TextField
                name='email'
                onChange={ onInputChange }
                value={email}
                label='Correo'
                type="email"
                placeholder="ejemplo@google.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2,}}>
              <TextField 
                name='password'
                onChange={ onInputChange }
                value={password}              
                label='Contraseña'
                type="password"
                placeholder="Contrseña"
                fullWidth/>
            </Grid>

            <Grid 
              container
              spacing={2}
              sx={{mb: 2, mt: 1}}>
              
              <Grid 
                item
                xs={12}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert 
                  severity="error"
                  sx={{
                  backgroundColor: 'transparent'
                  }}
                >
                {errorMessage}                  
                </Alert>
              </Grid>
              <Grid 
                item
                xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}                
                  sx={{
                    backgroundColor:'color5.main', 
                    color: 'color3.main',
                    ":hover": { 
                      backgroundColor: 'color3.main', 
                      color: 'color5.main' } }}
                  variant='contained' 
                  fullWidth
                  type='submit'

                >
                  <Typography>Login</Typography>
                </Button>
              </Grid>

              <Grid 
                item
                xs={12} sm={6}>
                <Button 
                  disabled={isAuthenticating}                
                  sx={{
                    backgroundColor:'color5.main', 
                    color: 'color3.main', 
                    ":hover": { 
                      backgroundColor: 'color3.main', 
                      color: 'color5.main' }  
                  }}
                  variant='contained' 
                  fullWidth
                  onClick={ onGoogleSignIn }
                >
                  <Google/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid 
              container
              direction='row'
              justifyContent='end'>
                <Typography 
                  color='color5.main'
                  sx={{
                    mr: 1,
                    fontSize: 14}}>
                    ¿No estás registrado?
                </Typography>
              <Link 
                sx={{
                  ":hover": { 
                    color: 'color5.main' } 
                }}
                component={RouterLink} 
                fontSize='14px' 
                underline='none' 
                color='color4.main' 
                to='/auth/register'>
                Crea una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>               
        
    </AuthLayout>
  )
}
