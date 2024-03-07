import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='menu' style={{position:'fixed', top:0,right:0,width:'100%',display:'inline-block'}}>
       <ul style={{textAlign:'center'}}>
        <li><a href=''>HOME</a></li>
        <li><a href=''>LOGIN</a></li>
        <li><a href=''>REGISTER</a></li>
        <li><a href=''>ABOUT</a></li>
       </ul>
    </div>
    <div style={{ position: 'fixed', bottom: 0,right:0, width: '100%' }}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </div>
    </>
  );
}
