import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import { PlayArrow } from '@mui/icons-material'
import Hidden from '@mui/material/Hidden';
import Contact from './Contact'
import Herocontact from './Herocontacts'
import Herocontacts from './Herocontacts'
import Countdown from './Countdown'
import Image from 'next/image'


const HomeHero = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container alignItems='center' justifyContent='center' textAlign='center'>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant='p' sx={{ color: 'white', lineHeight: 1.6, fontSize: 18 }} >

                  {' '}
                  Exceptional Dental Care with Excellent Results



                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    // width: { md: 850 },
                    position: 'relative',
                    fontSize: { xs: 35, md: 40, lg: 45 },
                    mb: { xs: 3, sm: 2 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    color: 'white',
                    lineHeight: 1.5,
                  }}
                >
                  {' '}
                  NEW SMILE

                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    '& svg': {
                      position: 'absolute',
                      top: -7,
                      right: -20,
                      width: { xs: 22, md: 27 },
                      height: 'auto',
                    },
                  }}
                >

                </Typography>{' '}
                <br />
                <Box sx={{ '& button': { mr: 2 } }}>


                  <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350} >

                    <StyledButton color="white" size="large" variant="outlined" startIcon={<PlayArrow />} sx={{ mb: { xs: 3, sm: 0, md: 0 }, fontSize: 17, border: "3px solid", borderRadius: 1, borderColor: "#49caeb", color: 'white' }}>
                      Watch Video
                    </StyledButton>
                  </ScrollLink>

                </Box>


              </Box>

            </Grid>
            <Grid item xs={12} md={6}>
<Image src='/images/main1.jpeg' alt='dentist' width={100} height={100} ></Image>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </>
  )
}
export default HomeHero