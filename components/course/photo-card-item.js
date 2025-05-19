import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const PhotoCardItem = ({ item }) => {
  return (
    <Box sx={{
      px: 1,
      py: 1,
    }}>
      <Box sx={{
        borderRadius: 4,
        transition: (theme) => theme.transitions.create(['box-shadow']),
        '&:hover': {
          boxShadow: 2,
          [`& .${iconButtonClasses.root}`]: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            boxShadow: 2,
          },
        },
      }}>
        <Image
          alt={'Course ' + item.id}
          src={`/images/clinicphotos/patient${item}.jpg`}
          width={100}
          height={100}
          layout='responsive'
          style={{ border: '1px solid white', borderRadius: 4 }}
        ></Image>
     </Box>
    </Box>);
};
export default PhotoCardItem;
