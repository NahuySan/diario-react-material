import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({title = '', body, id, date, imageUrls = []}) => {

  const newTitle =  useMemo( ()=> {

    return title.length > 17 ? 
      title.substring(0, 16) + '...' :
      title;

  }, [title]);

  const newBody =  useMemo( ()=> {

    return body.length > 17 ? 
      body.substring(0, 16) + '...' :
      body;

  }, [body]);

  const dispatch = useDispatch();

  const editNote = () => {
    dispatch(setActiveNote( {title, body, id, date, imageUrls} ) )
  }

  return (
    <ListItem 
    disablePadding
    >
    <ListItemButton
      onClick={editNote}
    >
      <ListItemIcon>
        <TurnedInNot/>
      </ListItemIcon>
      <Grid container>
        <ListItemText primary={ newTitle }/>
        <ListItemText secondary={ newBody }/>
      </Grid>
    </ListItemButton>
  </ListItem>
  )
}

