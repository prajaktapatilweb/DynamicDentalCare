import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from "@mui/icons-material/Star";
import { StyledButton } from "../styled-button";
import { motion } from "framer-motion";
import { Card, Link } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';


const DrAkshay = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const Lists = motion(List);
  const ListItems = motion(ListItem);
  const explist = [
    "10+ Years of experience",
    "Experienced Prosthodontist",
    "Government Dental College Alumni",
    "Comprehensive Treatment Solutions",
    "Specialized in Implants and FMR",
    "Former Assistant Professor",
  ];
  return (
    <Box sx={{ py: { xs: 7, md: 7 }, backgroundColor: "background.paper" }}>
      <Container>

        <div class="section-title">
          <h2>Doctors</h2>
          <p>Magnam dolores commodi suscipit.   Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <Grid container spacing={3} alignItems="center" justifyContent="center" textAlign='center'>
          <Grid item xs={12} sm={4}>
            <Card sx={{ background: '#f0fafa', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
              {/* <CardActionArea> */}
              <CardMedia
                component="img"
                height="100%"
                image="/images/dr/dr013.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h4 style={{
                    fontWeight: 700,
                    marginBottom: '5px',
                    fontSize: '18px',
                    color: '#555555'
                  }}>Walter White</h4>
                  {/* <span>Chief Medical Officer</span> */}
                </Typography>

              </CardContent>
              {/* </CardActionArea> */}
            </Card>

          </Grid>
          <Grid item xs={12} sm={7}>

            <h4

              style={{
                color: "black",
                fontWeight: '400',
                textAlign: "justify",
                marginLeft: 15

              }}
            >
              Meet Dr. Akshay, the Founder of Dr. Akshay's DentAvenue Dental
              Clinic in Chembur. With more than 10 years of experience in the
              field of Dentistry, Dr. Akshay has completed his MDS in
              Prosthodontics (Crown, Bridge, and Implantology) from Government
              Dental College, Mumbai. He specializes in Full Mouth
              Rehabilitation, <Link href='https://www.dentavenue.in/services/smile-designing-in-chembur' sx={{ color: '#551a8b' }}> Smile Designing </Link>, Implants, Complete and Partial
              Dentures, Laminates, and Veneers. If you're looking for a skilled
              dentist near me, Dr. Akshay is your go-to expert. He also served
              as an ex-assistant professor at Government Dental College, Mumbai.
            </h4>
            <List sx={{ mt: -2, mb: 2 }}>
              {explist.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: '#49caeb' }} />
                  {item}
                </ListItem>
              ))}
            </List>


            <Box textAlign='left' sx={{ ml: 3 }}>
              {/* <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350}> */}

              <StyledButton color="primary" size="large" variant="contained">
                <a
                  href="https://www.practo.com/mumbai/doctor/akshay-bandewar-dentist-2"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Book An Appointment{" "}
                </a>
              </StyledButton>
              {/* </ScrollLink> */}
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};
export default DrAkshay;
