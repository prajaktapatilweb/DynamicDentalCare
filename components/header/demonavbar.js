import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Grid, Hidden, IconButton, Link } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import Countdown from "../home/Countdown";
import Navbar from "./navbar";


function ResponsiveAppBar() {
  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";

    return (
        <AppBar
            position="static"
            sx={{
                backgroundImage: { xs:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero5.JPG")`,md:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero1.jpg")`},
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition:'center',
                display: "flex",
                height:"100%",
            }}
        >
            <section style={{
                background: '#121f38', width: '100%', padding: 0, borderRadius: 0,
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>
                               
                                <Link href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        +919702955057
                                    </a>
                                </Link>
                                /

                                <Link  href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    +919833389890
                                    </a>
                                </Link>{" "}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link 
                               href={`mailto:${'Dynamicdentalcare2013@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    Dynamicdentalcare2013@gmail.com
                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/dranujdynamicdentalcare/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>
                           
                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/dranuj6344/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="linkedin">
                                <a
                                    href="https://jsdl.in/DT-43QAIIEQQYA"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                     <Image src="/images/jd.png" width={20} height={20} ></Image>

                                      
                                      
                                </a>
                            </IconButton>
                            <IconButton aria-label="linktree">
                                <a
                                    href="https://linktr.ee/DynamicDentalCare"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                     <Image src="/images/icons/linktree.webp" width={20} height={20} ></Image>  
                                </a>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </section>
            <section style={{
                 padding: 3,
                background: 'rgba( 255, 255, 255, 0.4)',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
<Navbar/>
</section>
            <Box sx={{ my: 10 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Hidden smDown>
                            <Typography
                                variant="p"
                                sx={{ color: "white", lineHeight: 1.6, fontSize: 23 }}
                            >
                                {" "}
                                Trusted dental clinic in Airoli and Thane West.

                            </Typography>
                            </Hidden>
                            <Typography
                                component="h2"
                                sx={{
                                    // width: { md: 850 },
                                    position: "relative",
                                    fontSize: { xs: 35, md: 40, lg: 40 },
                                    mb: { xs: 3, sm: 2 },
                                    letterSpacing: 1.5,
                                    fontWeight: "bold",
                                    color: "white",
                                    lineHeight: 1.5,
                                }}
                            >
                                {" "}
                                Your Journey to Dental Wellness Starts Here!
                            </Typography>
                      

                            <Box sx={{ "& button": { mt: 4, mb: 7 } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        color="white"
                                        size="large"
                                        variant="outlined"
                                        sx={{
                                            mb: { xs: 3, sm: 0, md: 0 },
                                            fontSize: 17,
                                            border: "1px solid",
                                            borderRadius: 1,
                                            background:'#70cad2',
                                            borderColor: "#70cad2",
                                            color: "#2b337d",
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>
                                </ScrollLink>
                            </Box>
                            <Countdown />
                        </Box>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
