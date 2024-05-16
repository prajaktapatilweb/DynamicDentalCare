import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { FooterSocialLinks } from "../footer";
import Link from "next/link";
import Whatsappnew from "./Whatsappnew";
import CallIcon from '@mui/icons-material/Call';
import { UpgradeRounded, WhatsApp } from "@mui/icons-material";
const Footer = () => {
  const contactno1 = "+919833389890";

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121f38",
        py: { xs: 6, md: 7 },
        color: "primary.contrastText",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Image src="/images/logo/logo1.jpg" width={100} height={100} objectFit="contain"></Image>

            
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
              Discover exceptional dental care at Dynamic Dental Care and Implant Centre, conveniently located in Airoli, Navi Mumbai, and Thane West. Led by Dr. Anuj Mishra, our dedicated team is committed to providing personalized treatments for a long-lasting, healthy smile. Whether you're in Airoli, Navi Mumbai, or Thane West, we're here for you.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2
                }}
              >
                <Image
                  src="/images/phone.png"
                  width={20}
                  height={20}
                  sx={{
                    overflow: "hidden",
                  }}
                ></Image>{" "}
                &nbsp;&nbsp;
                <Link
                  href={`tel:${contactno1}`}
                  target="_blank"
                  className="footermenu"
                  style={{ textDecoration: "underline", display: "inline-block" }}
                >
                  {contactno1}
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2
                }}
              >
                <Image
                  src="/images/email.png"
                  width={20}
                  height={20}
                  sx={{
                    overflow: "hidden",
                  }}
                ></Image> &nbsp;&nbsp;
                <Link
                  href={`mailto:${'dentavenuemumbai@gmail.com'}`}
                  target="_blank"
                  className="footermenu"
                  style={{ textDecoration: "underline", display: "inline-block" }}
                >
                  dentavenuemumbai@gmail.com
                </Link>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#" className="footermenu">
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#aboutus" className="footermenu">
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#treatments" className="footermenu">
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#testimonials" className="footermenu">
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#gallery" className="footermenu">
                Gallery
              </Link>
            </Typography>
          
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Working Hours
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>
              Mon-Sat : 10am – 9pm<br></br>
              Sun : 10am – 4pm
            </Typography>

            {/* <FooterNavigation /> */}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Treatments
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Root Canal</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental Implants</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Full Mouth Reconstruction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Braces & Aligners</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Crown & Bridges</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Wisdom Teeth Extraction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental X-Rays​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Teeth Whitening​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Cosmetic Dentistry</Typography>

          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Get In Touch
            </Typography>
            <a href="https://www.google.com/maps/place/Dr.+Akshay%E2%80%99s+DentAvenue/@19.0607957,72.8997529,15z/data=!4m5!3m4!1s0x0:0xd4992176e1672533!8m2!3d19.0607957!4d72.8997529" target="blank" style={{ color: 'white' }}>
              DentAvenue, 302, Third Floor, Abhishek Complex, Opposite to BMC M
              WEST WARD OFFICE, 1st Road, Chembur, Mumbai-400071
            </a>


            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15084.267627628198!2d72.8997529!3d19.0607957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c602cf4db0f7%3A0xd4992176e1672533!2sDr.%20Akshay&#39;s%20DentAvenue%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1689430175809!5m2!1sen!2sin"
              width="100%"
              height="200px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ marginBottom: 3, marginTop: 3 }}
            ></iframe>

            <FooterSocialLinks />

          </Grid>

          <Box>
            <div style={{ position: 'fixed', right: '40px', bottom: '40px', zIndex: 996, background: 'black', borderRadius: 5 }}>
              <Link
                href={`tel:${contactno1}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >

                <Image src="/images/telephone.png" width={40} height={40} style={{ paddingInline: 5, paddingTop: 5 }} alt="phone" />
              </Link>
            </div>
            <div style={{ position: 'fixed', left: '40px', bottom: '40px', zIndex: 996 }}>
              <Link
                href={`https://wa.me/${contactno1}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >
                <Image src="/images/whatsapp.webp" width={50} height={50} />
              </Link>
            </div>
          </Box>


          {/* <Whatsappnew /> */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
