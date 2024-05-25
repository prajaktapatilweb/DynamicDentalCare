import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppScrollbar from './AppScrollbar';

const AppThemeSetting = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isColorSettingOpen, setColorSettingOpen] = useState(false);
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: { xs: 85, xl: 125 },
        zIndex: 1110,
      }}
      className='customizerOption'
    >
       <Box
        sx={{
          borderRadius: '30px 0 0 30px',
          mb: 1,
          backgroundColor: orange[500],
          '&:hover': {
            backgroundColor: orange[700],
          },
          '& button': {
            borderRadius: '30px 0 0 30px',

            '&:focus': {
              borderRadius: '30px 0 0 30px',
            },
          },
        }}
      >
        <IconButton onClick={() => setSettingOpen(!isSettingOpen)} aria-label='location'>

          <LocationOnIcon
            sx={{
              animation: 'rotation 2s infinite linear',
              color: 'white',
            }}

          />
        </IconButton>
      </Box> 

      <Box
        sx={{
          borderRadius: '30px 0 0 30px',
          backgroundColor: orange[500],
          '&:hover': {
            backgroundColor: orange[700],
          },
          '& button': {
            borderRadius: '30px 0 0 30px',

            '&:focus': {
              borderRadius: '30px 0 0 30px',
            },
          },
        }}
      >
        <IconButton onClick={() => setColorSettingOpen(!isSettingOpen)} aria-label='contact'>
          <ContactsIcon sx={{
            color: 'white',
          }}
          />
          {/* <ColorLensIcon
            sx={{
              color: 'white',
            }}
          /> */}
        </IconButton>
      </Box>
      <Drawer
        anchor='right'
        sx={{
          '& .MuiBackdrop-root': {
            background: 'transparent',

          },
        }}
        // className={layoutType === LayoutType.BOXED ? 'boxed-drawer' : ''}
        open={isSettingOpen}
        onClose={() => setSettingOpen(false)}
      >
        {/* <AppScrollbar
          sx={{
            width: { xs: 300, md: 360, xl: 400 },
          }}
        > */}
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box component='h3' mb={0.5} fontSize={18}>
              hfdkggfhdh
              {/* <IntlMessages id='customizer.customiseSidebar' /> */}
            </Box>
            <Box component='p' mb={0} color='text.secondary'>
              vbhfdkjgjf
              {/* <IntlMessages id='customizer.customiseSidebarText' /> */}
            </Box>
          </Box>
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
            }}
          />
        {/* </AppScrollbar> */}
      </Drawer>
      <Drawer
        anchor='right'
        open={isColorSettingOpen}
        onClose={() => setColorSettingOpen(false)}
        sx={{
          '& .MuiBackdrop-root': {
            background: 'transparent',
          },
        }}
        // className={layoutType === LayoutType.BOXED ? 'boxed-drawer' : ''}
      >
        <AppScrollbar
          sx={{
            width: { xs: 300, md: 360, xl: 400 },
          }}
        >
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box component='h3' mb={0.5} fontSize={18}>
              Contact Us
            </Box>
            <Box component='p' mb={0} color='text.secondary' sx={{ mt: 5 }}>

            </Box>
          </Box>
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
            }}
          >
          </Box>
        </AppScrollbar>
      </Drawer>
    </Box>
  );
};

export default AppThemeSetting;
