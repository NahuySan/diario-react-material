import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({drawerWidth = 240}) => {
  
  const dispatch = useDispatch();



  const onLogout = () => {

    dispatch(startLogout());

  }
  
  return (
    <AppBar
      
      position="fixed"
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`
        },
        ml: {
          sm: `${drawerWidth}px`
        }, 
        backgroundColor: 'color5.main'
      }}>
        
      <Toolbar>
        <IconButton 
          color='color1.main'
          edge='start'
          sx={{
            mr: 2, display: {sm: 'none'}
          }}>
          <MenuOutlined/>
        </IconButton>  

        
        <Grid 
          container 
          direction= 'row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            border: 'none'
          }}
          >

          <Typography 
            variant='h6' 
            fontWeight='300'
            noWrap 
            component='div'
            color='color3.main'>
            Journapp
          </Typography>

          <IconButton 
            sx={{
            color: 'color3.main',
            ":hover": { 
              backgroundColor: 'transparent', 
              color: 'color1.main' 
              
            }         
            }}
            onClick={onLogout}
          >
            <LogoutOutlined />
          </IconButton>

        </Grid>    
      </Toolbar>  
    </AppBar>
  )
}

