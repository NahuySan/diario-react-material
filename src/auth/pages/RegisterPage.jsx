import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth"


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [
    (value)=>value.includes('@'), 
    'el correo debe tener una @'
  ],
  password: [
    (value)=>value.length >= 6, 
    'el password debe tener mas de 6 letas'
  ],
  displayName: [
    (value)=>value.length >= 1, 
    'el nombre es obligatorio'
  ]
}

export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);

  const dispatch = useDispatch();

  const {formState, displayName, email, password, onInputChange, 
        isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const {status, errorMessage} = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo( 
    () => status === 'checking', [status]
  );
  
  // console.log(displayNameValid)
        
  const onSubmit = (event) => {

    event.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return;
 
    dispatch(startCreatingUserWithEmailAndPassword(formState));
    // console.log(formState);

  }

  return (
    <AuthLayout title="Crear cuenta">
        <form 
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn"
        >
          <Grid container>

            <Grid 
              item 
              xs={12} 
              sx={{mt:2}}>
              <TextField 
                label='Nombre'
                type="text"
                placeholder="John Doe"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label='Correo'
                type="email"
                placeholder="ejemplo@google.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmited}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label='Contraseña'
                type="password"
                placeholder="Contrseña"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
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
                xs={12}>
                <Button 
                  disabled={isCheckingAuthentication}
                  sx={{
                    backgroundColor:'color5.main', 
                    color: 'color3.main',
                    ":hover": { 
                      backgroundColor: 'color3.main', 
                      color: 'color5.main' } }}
                  variant='contained' 
                  fullWidth
                  type="submit"
                >
                  <Typography>Crear cuenta</Typography>
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
                    fontSize: 14}}                
                >
                  ¿Ya tienes una cuenta?
                </Typography>

              <Link 
                component={RouterLink} 
                to='/auth/login'
                sx={{
                  color: 'color1.main',
                  ":hover": { 
                    color: 'color5.main' } 
                }}
                fontSize='14px' 
                underline='none' 
                color='color4.main'               
              >

                Ingresar

              </Link>
            </Grid>

          </Grid>
        </form>  
        
    </AuthLayout>
  )
}
