import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


const DrAkshay = () => {
  const explist = [
    "12+ Years of Experience",
    "Skilled Dental Surgeon & Implantologist",
    "Expert in Smile Designing & Full Mouth Rehab",
    "Patient-Centric and Compassionate Care",
    "Advanced Training in Implants & Restorative Dentistry",
    "Trusted Dentist in Thane West",
  ];
  const explist1 = [
    "10+ Years of Experience",
    "Skilled General & Cosmetic Dentist",
    "Specializes in RCT, Crowns & Bridges",
    "Focused on Patient Comfort and Care",
    "Expertise in Smile Enhancement",
    "Trusted Dental Surgeon in Airoli",
  ]

  return (
    <Box sx={{ py: { xs: 7, md: 5 }, backgroundColor: "background.paper" }} id="Doctors">
      <Container>
        <div class="section-title">
          <h2>Meet Our Team of Expert Dentists</h2>
          <p style={{ marginTop: -5 }}>Leaders in Dental Excellence</p>

        </div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >


          <Grid item xs={12} sm={5}>
            <Box sx={{ p: 3 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Background border */}
                <div
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: -10, // move left
                    width: '100%',
                    height: '100%',
                    border: '4px solid #3fbbc0', // any color you want
                    zIndex: 0,

                  }}
                />
                <Image
                  src="/images/dr/dr1.jpg"
                  alt="DrAnuj"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid lightgrey'
                  }}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box sx={{ px: 1 }}>

              < Typography
                component="h1"
                sx={{
                  fontWeight: 700,
                  marginBottom: "5px",
                  fontSize: "30px",
                  color: "primary.dark",
                }}
              >

                Dr. Anuj Mishra
              </Typography>
              <span
                style={{
                  fontSize: "18px",

                  fontWeight: 500,
                }}
              >
                Dental Surgeon and Implantologist

              </span>


              <Typography
                sx={{
                  color: "text.primary",
                  lineHeight: 1.5,
                  marginBottom: 2.5,
                  fontSize: 17,
                  textAlign: "justify",
                  mt: 2

                }}
              >
                Looking for the best dentist in Thane West? Dr. Anuj Mishra might be the perfect fit for you.
                <br />
                Dr. Anuj Mishra brings 12+ years of expertise in transforming smiles and restoring oral health. As a dedicated dental surgeon and implantologist, he specializes in a range of advanced treatments, including full mouth rehabilitation, smile designing, dental implants, root canals, crowns and bridges, and various other dental procedures. With a commitment to excellence, Dr. Anuj ensures each individual receives personalized care and achieves optimal oral wellness.


              </Typography>
              <List>
                {explist.map((item, i) => (
                  <ListItem

                    key={item}
                    custom={i}
                    sx={{ marginLeft: 0 }}
                  >
                    <StarIcon sx={{ fontSize: 15, marginRight: 2 }} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} sm={7} order={{ xs: 1, md: 0 }} sx={{ mt: { xs: 0, md: 5 } }}>
            <Box sx={{ px: 1 }}>
              < Typography
                component="h1"
                sx={{
                  fontWeight: 700,
                  marginBottom: "5px",
                  fontSize: "30px",
                  color: "primary.dark",
                }}
              >
                {" "}
                Dr. Shweta Mishra
              </Typography>
              <span
                style={{
                  fontSize: "18px",

                  fontWeight: 500,
                }}
              >
                Dental Surgeon


              </span>

              {/* {messages['dashboard.analytics.eddieMassy']} */}
              <Typography
                sx={{
                  color: "text.primary",
                  lineHeight: 1.5,
                  marginBottom: 2.5,
                  fontSize: 17,
                  textAlign: "justify",
                  mt: 2

                }}
              >
                Meet Dr. Shweta Mishra, a skilled Dental Surgeon with over ten years of experience in delivering exceptional dental care. Specializing in Root Canal, Crown & Bridges, Cosmetic Dentistry, and a range of other dental treatments, Dr. Shweta is dedicated to enhancing smiles and restoring dental function. Her compassionate approach and commitment to patient comfort ensure that each individual receives personalized care tailored to their unique needs. Trust Dr. Shweta for top-notch dental solutions and a brighter, healthier smile.
              </Typography>
              <List>
                {explist1.map((item, i) => (
                  <ListItem

                    key={item}
                    custom={i}
                    sx={{ marginLeft: 0 }}
                  >
                    <StarIcon sx={{ fontSize: 15, marginRight: 2 }} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} order={{ xs: 0, md: 1 }} sx={{ mt: 5 }}>
            <Box sx={{ p: 3 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Background border */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -8,
                    right: -12, // move left
                    width: '100%',
                    height: '100%',
                    border: '4px solid #3fbbc0', // any color you want
                    zIndex: 0,

                  }}
                />
                <Image
                  src="/images/dr/dr2.jpg"
                  alt="DrShweta"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid lightgrey'

                  }}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
        {/* </Card> */}


        {/* <Grid
          container
          spacing={7}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="flip-card"
              sx={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              {/* <div class="flip-card"> *
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <CardMedia
                    component="img"
                    height="100%"
                    image="/images/dr/dr013.jpg"
                    alt="green iguana"
                  /> *
                  <img
                    src="/images/dr/dr013.jpg"
                    alt="Avatar"
                    style={{ width: "100%", height: "400px" }}
                  />
                  {/* <CardContent> *
                  <Typography gutterBottom variant="h5" component="div">
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "5px",
                        fontSize: "18px",
                        color: "#555555",
                      }}
                    >
                      {" "}
                      Dr. Anuj Mishra
                    </h4>
                    <span>Dental Surgeon and Implantologist</span>
                    <br></br>
                    Experience: 10+ Years
                  </Typography>

                  {/* </CardContent> *
                </div>
                <div class="flip-card-back" style={{ padding: 15 }}>
                  <h4
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                    }}
                  >
                    Dr. Anuj Mishra brings over a decade of expertise in
                    transforming smiles and restoring oral health. As a
                    dedicated dental surgeon and implantologist, he specializes
                    in a range of advanced treatments, including Full Mouth
                    Rehabilitation, Smile Designing, Dental Implants, Complete &
                    Partial Dentures, Laminated & Veneers, Root Canal, Crown &
                    Bridges, and various other dental procedures. With a
                    commitment to excellence and a patient-centric approach, Dr.
                    Anuj ensures each individual receives personalized care and
                    achieves optimal oral wellness.
                  </h4>
                </div>
              </div>
              {/* </div> *
            </Card>
            {/* <Card sx={{ background: '#f0fafa', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
              {/* <CardActionArea> *
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
                  }}>  Dr. Anuj Mishra</h4>
                  {/* <span>Chief Medical Officer</span> *
                </Typography>

              </CardContent>
              {/* </CardActionArea> *
            </Card> *
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="flip-card"
              sx={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              {/* <div class="flip-card"> *
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <CardMedia
                    component="img"
                    height="100%"
                    image="/images/dr/dr013.jpg"
                    alt="green iguana"
                  /> *
                  <img
                    src="/images/dr/dr02.jpg"
                    alt="Avatar"
                    style={{ width: "100%", height: "400px" }}
                  />
                  {/* <CardContent> *
                  <Typography gutterBottom variant="h5" component="div">
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "5px",
                        fontSize: "18px",
                        color: "#555555",
                      }}
                    >
                      {" "}
                      Dr. Shweta Mishra
                    </h4>
                    <span>Dental Surgeon</span>
                    <br></br>
                    Experience: 8+ Years
                  </Typography>

                  {/* </CardContent> *
                </div>
                <div class="flip-card-back" style={{ padding: 15 }}>
                  <h4
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                    }}
                  >
                    Meet Dr. Shweta Mishra, a skilled Dental Surgeon with over eight years of experience in delivering exceptional dental care. Specializing in Root Canal, Crown & Bridges, Cosmetic Dentistry, and a range of other dental treatments, Dr. Shweta is dedicated to enhancing smiles and restoring dental function. Her compassionate approach and commitment to patient comfort ensure that each individual receives personalized care tailored to their unique needs. Trust Dr. Shweta for top-notch dental solutions and a brighter, healthier smile.


                  </h4>
                </div>
              </div>
              {/* </div> *
            </Card>

            {/*           
            <List sx={{ mt: -2, mb: 2 }}>
              {explist.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: '#49caeb' }} />
                  {item}
                </ListItem>
              ))}
            </List> *
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};
export default DrAkshay;
