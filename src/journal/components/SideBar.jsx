
import { 
  Box, 
  Divider, 
  Drawer, 
  List, 
  Toolbar, 
  Typography 
} from "@mui/material";

import { useSelector } from "react-redux"
import { SideBarItem } from "./";

export const SideBar = ({drawerWidth}) => {

  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);


  return (
    <Box
      component='nav'
      sx={{
        width:{sm: drawerWidth}, 
        flexShrink:{sm: 0},

      }}> 
      <Drawer
        variant='permanent'
        
        open //*podria ser open={true} pero ya esta por defecto asi 
        // onClose={} mirar como se usa y agregar algo
        sx={{
          border: 'none',
          display:{xs:'block'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box', 
            backgroundColor: 'color3.main', 
            width: drawerWidth},
          
        }}
        >
<Toolbar
  sx={{
    boxShadow: ' 3px 3px 6px rgba(0, 0, 0, 0.3), 0px -3px 6px rgba(0, 0, 0, 0.3)', // Ajusta los valores según tus necesidades
    backgroundColor: 'color5.main',
  }}
>
  <Typography 
    sx={{
      color: 'color3.main'          
    }}        
    variant='h6'
    fontWeight='400'
    >
    {displayName}
  </Typography>
</Toolbar>



      <List
      sx={{
        color: 'color5.main',          
        backgroundColor: 'transparent'          
      }}            
      >
        {
          notes.map(note => (
            <SideBarItem 
            key={note.id} {...note} />
          ))
        }
      </List>

      </Drawer>

    </Box>
  )
}


