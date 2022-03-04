import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate }  from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  React.useEffect(
    () => {
      if(value === 0 )
      navigate("/");
      else if(value === 1)
      navigate("/movies");
      else if(value === 2)
      navigate("/series");
      else if(value === 3)
      navigate("/search");
    }, [value]
  )
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Movies" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="TV series" icon={<LocationOnIcon />} />
  <BottomNavigationAction label="Search" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </Box>
  );
}
