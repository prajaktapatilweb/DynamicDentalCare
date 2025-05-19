import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Clinicinfo from './Clinicinfo';
import Clinicinfo1 from './Clinicinfo1';
import { Container } from '@mui/material';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
    <Container>
<div class="section-title" id='aboutus'>
              <h2>About Dynamic Dental Care</h2>
            </div>

    <Box sx={{ width: '100%', typography: 'body1' ,py:0}} >
      <TabContext value={value} >
        <Box sx={{pb:2}}>
        <TabList
  value={value} // Make sure this is controlled!
  onChange={handleChange}
  aria-label="lab API tabs example"
  centered
>
  <Tab
    label="Thane"
    value="1"
    sx={{
      '&.Mui-selected': {
        backgroundColor: '#e0f7fa', // your desired color
        color: '#000',              // optional: text color
        borderTopLeftRadius: '8px',
        borderTopRightRadius:'8px'
      },
    }}
  />
  <Tab
    label="Airoli"
    value="2"
    sx={{
      '&.Mui-selected': {
        backgroundColor: '#e0f7fa',
        color: '#000',
        borderTopLeftRadius: '8px',
        borderTopRightRadius:'8px'
      },
    }}
  />
</TabList>
        </Box>
        <TabPanel value="1"> <Clinicinfo/>  </TabPanel>
        <TabPanel value="2"><Clinicinfo1/> </TabPanel>
      </TabContext>
    </Box>
    </Container>
</section>
  );
}
