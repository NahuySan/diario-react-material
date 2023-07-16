
import { EventNoteOutlined, StarOutline } from '@mui/icons-material'
import {Grid, Typography} from '@mui/material'

export const NothingSelectedView = () => {
  return (
    <Grid 
      className="animate__animated animate__fadeIn"
      container
      spacing={0} 
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 110px)', 
        // backgroundImage: `url(${'../../../public/img/journal.jpg'})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        border: '2px solid',
        borderColor:'color5.main',
        borderRadius: 5
        }}>

    <Grid 
      item 
      xs={12}>
      
      <EventNoteOutlined
          sx={{
            fontSize:80, 
            color:'color2.main'
        }}
      />      
  
    </Grid>  

    <Grid 
      item 
      xs={12}
    >
      <Typography 
        color='color5.main'
        variant='p'
        sx={{
          fontWeight:600,
          fontFamily: 'montserrat'
        }}
      >
        - Selecciona o crea una Entrada -        
      </Typography>


    </Grid>    

    </Grid>
  )
}

