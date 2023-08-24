import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../hooks/useForm";
import { 
  startSavingNote, 
  startUploadingFiles, 
  setActiveNote, 
  startDeletingNote 
} from "../../store/journal";
import { ImageGallery } from "../components";

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active:note, messageSaved, isSaving } = useSelector(state => state.journal);
  const { title, body, date, formState, onInputChange } = useForm( note );

  const fileInputRef = useRef();

  const dateString = useMemo( () => {

    return new Date( date ).toUTCString();

  }, [date])

  useEffect( () => {

    dispatch(setActiveNote(formState));

  }, [formState]);

  useEffect( () => {

    if( messageSaved.length > 0 ) {

      Swal.fire( 'Nota actualizada', messageSaved, 'success' );

    }

  }, [messageSaved] )

  const onSaveNote = () => {
    dispatch( startSavingNote() );
  }

  const onFileInputChange = ({ target }) => {

    if (target.files === 0) return;

    console.log('subiending...')

    dispatch(startUploadingFiles( target.files ));

  }

  const onDelete = () => {

    dispatch( startDeletingNote() );

  }

  return (
    <Grid
      className="animate__animated animate__fadeIn"
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        mb:1,
        border: 'none'
      }}
    >
      <Grid 
        item
        sx={{
          mb: 2
        }}

      >
        <Typography
          fontSize={19}
          fontWeight={400}
          color='color1.main'
        >
          { dateString }
        </Typography>
      </Grid>

      <Grid 
        item
        sx={{
          mb: 1
        }}
        >

        <input 
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{
            display: 'none'
          }}
        />  

        <Button
          disabled={isSaving}
          onClick={ () => fileInputRef.current.click() }
          sx={{
            mr: 1,
            fontSize: '10px',
            color: 'color5.main',
            mb: 1,
            ":hover": { 
              backgroundColor: 'color3.main', 
              color: 'color5.main',
               
              
            },   
            
            border: '2px solid',
            borderColor: 'transparent',
            ":hover": { 
              color: 'color5.main',
              backgroundColor:'color3.main',
              border: '2px solid',
              borderColor: 'color5.main',
            }           
          }}

        >
          Agregar imagen  
          <UploadOutlined 
            
            sx={{
              fontSize: 15,
              ml: 1,
            }}

          />



        </Button>

        <Button 
          disabled={ isSaving }
          onClick={ onSaveNote }
          sx={{
            mb: 1,
            backgroundColor:'color5.main', 
            color: 'color3.main', 
            fontSize: 10,
            fontWeight: 600,
            // textTransform: 'lowercase', 
            border: '2px solid',
            borderColor: 'transparent',
            ":hover": { 
              color: 'color5.main',
              backgroundColor:'color3.main',
              border: '2px solid',
              borderColor: 'color5.main',
            }           
          }}
          >
          {/* <SaveOutlined 

            sx={{
              fontSize: 20, 
              mr: 1,
              color:'color3.main',
              
            }}
          /> */}

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
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{
            border: 'none',
            mb: 1
          }}
        >
          
        </TextField>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué se cuenta?'
          name='body'
          value={body}
          onChange={onInputChange}
          minRows={5}
        >

        </TextField>
      </Grid>

      <Grid 
        container
        justifyContent='start'
      >
        <Button
          onClick={onDelete}
          sx={{
            mb: 1,
            mt: 1,
            backgroundColor:'color5.main', 
            color: 'color3.main', 
            fontSize: 10,
            fontWeight: 600,
            // textTransform: 'lowercase', 
            border: '2px solid',
            borderColor: 'transparent',
            ":hover": { 
              color: 'color5.main',
              backgroundColor:'color3.main',
              border: '2px solid',
              borderColor: 'color5.main',
            }           
          }}
        >

          <DeleteOutline 
            sx={{
              fontSize: '17px'
            }}
          />
          Borrar
        </Button>

      </Grid>

      <ImageGallery
        images={note.imageUrls}
      />    

    </Grid>
  )
}

