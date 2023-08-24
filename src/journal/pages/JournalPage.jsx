import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";



export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {

    dispatch(startNewNote());

  }

  return (
    <JournalLayout>

      {/* <Typography >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam totam laborum perferendis, hic enim vero ipsa cupiditate ipsam eius minus in aliquam possimus, facere officiis perspiciatis saepe incidunt quia!
      </Typography> */}

      {
        active != null ? ( <NoteView /> ) : ( <NothingSelectedView /> )
      }

      
      {/*  */}

      <IconButton
                disabled={isSaving}
        onClick={onClickNewNote}
        size='medium'
        sx={{
          fontSize: 40,
          fontWeight: 300,
          color: 'color5.main',
          backgroundColor: 'color3.main',
          ':hover': {
            backgroundColor: 'color5.main',
            color: 'color3.main',
            fontWeight: '400'
          },
          position:'fixed',
          right: 50,
          bottom: 50,
        }}  
      >
      <AddOutlined/>
      </IconButton>  

    </JournalLayout>
  )
}

