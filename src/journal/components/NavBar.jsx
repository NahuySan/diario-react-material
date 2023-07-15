import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWidth = 240}) => {
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
        backgroundColor: 'color3.main'
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
          alignItems='center'>

          <Typography 
            variant='h6' 
            noWrap 
            component='div'
            color='color2.main'>
            JournalApp
          </Typography>

          <IconButton 
            color='color3.main'>
            <LogoutOutlined />
          </IconButton>

        </Grid>    
      </Toolbar>  
    </AppBar>
  )
}

