import { BorderColor, BorderColorOutlined, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

export const NoteView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn"
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        mb: 1
      }}
    >
      <Grid item>
        <Typography
          fontSize={39}
          fontWeight={200}
          color='color3.main'
        >
          28 de Agosto, 2023
        </Typography>
      </Grid>

      <Grid 
        item
        >
        <Button 
          sx={{
            backgroundColor:'color2.main', 
            color: 'color1.main',            
          }}
          >
          <SaveOutlined 

            sx={{
              fontSize: 25, 
              mr: 1,
              color:'color1.main'              
            }}
          />

          Guardar 

        </Button>

      </Grid>

      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un Título'
          label='Título'
          sx={{
            border: 'none',
            mb: 1
          }}
        />
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué se cuenta?'
          minRows={5}
        />
      </Grid>

      <ImageGallery/>    

    </Grid>
  )
}

