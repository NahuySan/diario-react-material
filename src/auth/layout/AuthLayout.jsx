
import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid 
      container
      spacing={0} 
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh', 
        background: 'rgb(182,191,145)',
        background: 'linear-gradient(90deg, rgba(182,191,145,1) 9%, rgba(249,244,227,1) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>

      <Grid
        item
      >
        <Typography 
          variant="h2"
          sx={{
            fontWeight: 200,
            color: 'color5.main',
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
            mb: -1            
          }}  
        >
        Journapp
        </Typography>
        <Typography 
          variant="h6"
          sx={{
            fontWeight: 300,
            color: 'color5.main',
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
            pb: 2,            
          }}  
        >
        Diario digital
        </Typography>
      </Grid>   


      <Grid
        item
        className="box-shadow"
        xs={3}
        position='relative'
        sx={{
          width: {sm: 450},
          backgroundColor: 'transparent', 
          padding: 3, 
          border: '2px solid',
          borderColor: 'color5.main',
          position: 'relative',
          }} >
          
        <Typography 
          variant='h5' 
          position='relative' 
          sx={{
            mb: 1, 
            color: 'color5.main', 
            position: 'relative'}}>
          {title}
        </Typography>
        <Grid item zIndex={1}>
          {children} 
        </Grid>

      </Grid>

    </Grid>
  )
}        