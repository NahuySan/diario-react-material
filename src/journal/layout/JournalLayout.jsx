import { Box, Toolbar } from "@mui/material"
import {NavBar} from '../components/index'
import {SideBar} from '../components/index'

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        backgroundColor: 'color3.main',
      }}
      className="animate__animated animate__fadeIn"
      >
      
      <NavBar drawerWidth={drawerWidth} />
      <SideBar 
        
        drawerWidth={drawerWidth} />

      <Box 
        component='main'   
        sx={{
              flexGrow: 1, 
              p: 2
            }}>
        <Toolbar/>
        {children}
      </Box>

    </Box>
  )
}
