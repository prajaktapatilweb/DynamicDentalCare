import React from "react";
import { Avatar, Box, Container, Grid } from "@mui/material";
import {  motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
   const textVariants={
        initial:{
            x:-500,
            opacity:0,
        },
        
        animate:{
            x:0,
            opacity:1,
            transition:{
            
                duration:1,
                staggerChildren:0.1
            }
        },
        scrollbutton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }

    }
    const sliderVariants={
        initial:{
            x:0,
            
        },
        
        animate:{
            x:"-220%",
            transition:{
            repeat:Infinity,
            repeatType:"mirror",
                duration:20,
            }
        },
       

    }

  return (
    <div className="heros">
      <Container sx={{marginTop: 10}}>
        <Grid container spacing={{xs: 4, md:4}}>
        <Grid item xs={12} md={6}>
      <div className="wrapper">
        <motion.div className="textcontainer" variants={textVariants}
        initial="initial"
        animate="animate"
        >
        
          <motion.h2  variants={textVariants}>Prajakta Patil</motion.h2>
          <motion.h1  variants={textVariants}>Web Developer and UI Designer</motion.h1>
          <div className="buttons">
            <motion.button  variants={textVariants}>See The Latest Work</motion.button>
            <motion.button  variants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.img   variants={textVariants} animate="scrollbutton" src="/scroll.png"></motion.img>
        </motion.div>
      </div>
      </Grid>
      
      <motion.div className="slidingcontainer" variants={sliderVariants}
        initial="initial"
        animate="animate">
        Writer Creator Content Influencer
      </motion.div>

    
                            <Grid item xs={12} md={6}>
                            <Image src="/images/dr/drs.jpg"   height={100}
                                    width={100}
                                    layout="responsive"
                                    objectFit="cover" 
                                    alt="abc">

                                    </Image>

                             
                                </Grid>
     
      </Grid>

      <Box
            sx={{
              // color: 'primary.contrastText',
              // p: 5,
              // bgcolor: '#847266',
              // m: 1,
              // borderTopLeftRadius: 3,

              // background:
              //   'linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)',
              // bgcolor: 'primary.main',
              // flexDirection: { xs: 'column', sm: 'column' },
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
              // zIndex: 1,
            }}
          >
            <div className='imgbox'>
              <div className='content'>
                <Avatar
                  src="/images/dr/drs.jpg"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transition: 0.5,
                  }}
                />
              </div>
            </div>
            
          </Box>

      </Container>
     
    </div>
  );
}
