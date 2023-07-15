import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
      component='nav'
      sx={{
        width:{sm: drawerWidth}, 
        flexShrink:{sm: 0}
      }}>
      <Drawer
        variant='permanent'
        open //*podria ser open={true} pero ya esta por defecto asi 
        // onClose={} mirar como se usa y agregar algo
        sx={{
          display:{xs:'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
        >
      <Toolbar>
        <Typography variant='h6'>
          NahueL
        </Typography>
      </Toolbar>
      <Divider/>
      <List>
        {
          [
            'enero',
            'febrero',
            'marzo',
          ].map(text => (
            <ListItem 
              key={text}
              disablePadding
              >
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text}/>
                  <ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }/>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      </Drawer>
    </Box>
  )
}


