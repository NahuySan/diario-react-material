
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
        backgroundImage: `url(${'../../../img/Journal.webp'})`,
        // backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
      <Typography>Journapp</Typography>
      <Grid
        item
        className="box-shadow"
        xs={3}
        zIndex={0}
        position='relative'
        sx={{
          width: {sm: 450},
          backgroundColor: 'transparent', 
          padding: 3, 
          border: '2px solid',
          borderColor: 'color1.main',
          borderRadius: 0,
          zIndex: 'zIndex.appBar',
          position: 'relative'
          }} >
          
        <Typography 
          variant='h5' 
          position='relative' 
          sx={{
            mb: 1, 
            color: 'color3.main', 
            zIndex: 'zIndex.drawer', 
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