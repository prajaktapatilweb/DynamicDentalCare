import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Avatar, Card } from '@mui/material';
const CourseCardItem = ({ item }) => {
  return (

    <Card sx={{ p: 5, mx: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Avatar alt="R" src='' sx={{ margin: 'auto', width: 60, height: 60, background: '#309cd1', padding: 5, }}><Image src={item.icons} width={50} height={50}></Image></Avatar>

      {/* <Avatar sx={{ bgcolor: green[500], margin: 'auto' }}>
<Image src={item.icons} width={100} height={100} ></Image>

</Avatar> */}

      <Typography variant='h4' sx={{ py: 2 }}> {item.title} </Typography>
      <Typography variant='body1' sx={{ textAlign: 'justify' }}>
        {item.info}
      </Typography>

      {/* <input type="checkbox" class="check" style={{ marginTop: '0.5rem' }} /> */}
    </Card>



    // <Box sx={{
    //   px: 1,
    //   py: 4,
    // }}>
    //   <Box sx={{
    //     p: 2,
    //     backgroundColor: 'background.paper',
    //     borderRadius: 4,
    //     transition: (theme) => theme.transitions.create(['box-shadow']),
    //     '&:hover': {
    //       boxShadow: 2,
    //       [`& .${iconButtonClasses.root}`]: {
    //         backgroundColor: 'primary.main',
    //         color: 'primary.contrastText',
    //         boxShadow: 2,
    //       },
    //     },
    //   }}>
    //     <Box sx={{
    //       lineHeight: 0,
    //       overflow: 'hidden',
    //       borderRadius: 3,
    //       mb: 2,
    //     }}>
    //       <Image src={item.cover} height={100}
    //         width={100}
    //         layout='responsive' alt={'Course ' + item.id} />
    //     </Box>
    //     <Box sx={{ mb: 2 }}>
    //       <Typography component="h2" variant="h5" sx={{ color: "#0b1341", overflow: 'hidden', fontSize: '1.2rem' }}>
    //         {item.title}
    //       </Typography>
    //       {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //         <Rating name="rating-course" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
    //         <Typography component="span" variant="h5">
    //           ({item.ratingCount})
    //         </Typography>
    //       </Box> */}
    //     </Box>
    //     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    //       <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //         <Typography component="span" variant="h5">
    //           {item.price}
    //         </Typography>
    //         {/* <Typography variant="h6">/ course</Typography> */}
    //       </Box>
    //       {/* <IconButton color="primary" sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}>
    //         <ArrowForward />
    //       </IconButton> */}
    //     </Box>
    //   </Box>
    // </Box>

  );
};
export default CourseCardItem;
