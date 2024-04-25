import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';


export default function Dentalservices() {
  var Details = [
    {
      icons: "/images/icons/implant.png",
      title: 'Dental implants',
      info: 'Restore your smile\'s strength and functionality with our expert dental implant treatment in Dombivli West.'
    },
    {
      icons: "/images/icons/dental-care.png",
      title: 'Crowns & Bridges',
      info: 'Experience top-quality crowns and bridges treatment in Dombivli West for lasting, natural-looking results.'
    },
    {
      icons: "/images/icons/dental-care2.png",
      title: 'Tooth Extraction',
      info: 'Experience safe and comfortable tooth extraction treatment in Dombivli West, performed by our skilled professionals.'
    },

    {
      icons: "/images/icons/dental-care2.png",
      title: 'Pediatric Dentistry',
      info: ' Ensure your child\'s oral health with gentle and specialized pediatric dentistry treatment in Dombivli West.'
    },
    {
      icons: "/images/icons/braces.png",
      title: 'Braces & Aligners',
      info: 'Straighten your smile effectively and comfortably with our braces and aligners treatment in Dombivli West.'
    },
    {
      icons: "/images/icons/root.png",
      title: 'Root Canal',
      info: 'Relieve pain and save your natural tooth with our precise root canal treatment in Dombivli West.'
    },
    {
      icons: "/images/icons/whitening.png",
      title: 'Teeth Whitening',
      info: 'Achieve a dazzling smile with our advanced teeth whitening treatment in Dombivli West, tailored to your unique needs.'
    },
    {
      icons: "/images/icons/veeners.png",
      title: 'Dental Veneers',
      info: 'Transform your smile with our precision-crafted dental veneers in Dombivli West. Achieve a flawless, natural look and regain your confidence.'
    },
    {
      icons: "/images/icons/dental-care2.png",
      title: 'Full Mouth Reconstruction',
      info: 'Experience a comprehensive revitalization of your smile through our full mouth reconstruction services in Dombivli West.  This treatment ensures a harmonious and functional oral environment.'

    }
  ]
  return (
    <div>
      <Box
        id="services"
        sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#f8f8f8" }}
      >
        <Container>
          <div class="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <Typography variant='h5' sx={{ textAlign: 'center', mb: 3, color: 'white' }}>
            Explore a wide range of dental services at our dental clinic in Dombivli. Schedule your appointment now for expert care.

          </Typography>
          <Grid container spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
            {Details.map((item, i) => (

              <Grid item xs={12} md={4}>
                <Card sx={{ p: 5 }}>
                  <Avatar alt="R" src='' sx={{ margin: 'auto', width: 60, height: 60, background: '#309cd1', padding: 5, }}><Image src={item.icons} width={50} height={50}></Image></Avatar>


                  <Typography variant='h4' sx={{ py: 2 }}> {item.title} </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                    {item.info}
                  </Typography>

                </Card>
              </Grid>

            ))}


          </Grid>
        </Container >
      </Box>
    </div >
  )
}
