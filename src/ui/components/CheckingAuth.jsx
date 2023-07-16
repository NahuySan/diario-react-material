import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
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

      <Grid
        container
        direction='row'
        justifyContent='center'
      >
          <CircularProgress color="warning"/>  
      </Grid>

  </Grid>
  )
}
