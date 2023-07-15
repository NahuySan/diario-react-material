import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";



export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam totam laborum perferendis, hic enim vero ipsa cupiditate ipsam eius minus in aliquam possimus, facere officiis perspiciatis saepe incidunt quia!
      </Typography> */}

      <NothingSelectedView />
      
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'color2.main',
          ':hover': {
            backgroundColor: 'color2.main',
          },
          position:'fixed',
          right: 50,
          bottom: 50,
        }}  
      >
        <AddOutlined 
          sx={{
            color:'color1.main',
            fontSize: 30
          }}  
        />
      </IconButton>

    </JournalLayout>
  )
}

