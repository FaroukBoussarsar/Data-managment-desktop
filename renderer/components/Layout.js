
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
const Layout=({children})=>{
    const router = useRouter();
    const [value, setValue] = useState(0)
    return(
        <Box>
           
 <Paper sx={{ position: 'relative', Top: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
              console.log(newValue);
              setValue(newValue);
              newValue===0&&router.push('/home')
              newValue===1&&router.push('/next')
          }}
        >
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Next" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
      {children}
        </Box>
    )
}
export default Layout;