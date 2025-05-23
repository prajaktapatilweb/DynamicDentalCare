import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { data } from "./feature.data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Fadeupside from "../Animations/Fadeupside";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from "@mui/icons-material/Star";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Countdown from "./Countdown";
import typography from "../../config/theme/typography";
import Drgallery from "./Drgallery";


const explist = [
    'Experienced team of professionals dedicated to improving and maintaining your oral health.',
    'Comprehensive range of services, including preventive dentistry, root canal treatment, and dental implants.',
    'Utilization of the latest advancements in dental technology for precise diagnoses and efficient treatments.',
    'Warm and welcoming environment ensuring patient comfort and relaxation throughout their dental journey.',
    'Specialization in children\'s dentistry for a positive dental experience for young patients.',
    'Skilled dental surgeon providing advanced dental treatments to address diverse oral health needs.',

];
const Clinicinfo = () => {
    const text = "Dynamic Dental Care - Best dentist in Thane";
    const letters = Array.from(text);
    // const words = text.split(" ");

    const containers = {
        hidden: { opacity: 0.5 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.07 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",

                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",

                damping: 12,
                stiffness: 100,
            },
        },
    };

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    // para fadeup
    const Variants = {
        offscreen: {
            y: 50
        },
        onscreen: {
            y: 10,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <>

            {/* <!-- ======= About Us Section ======= --> */}
                <Box id="about">
                   
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={5}>
                                <Drgallery/>
                               </Grid>
                            <Grid item xs={12} md={7} textAlign='justify'>
                                <Typography variant="h1" sx={{fontSize:{xs:27,md:33},mt:{xs:3,md:0},textAlign:'left'}}>Best Dentist in Thane West</Typography>
                                <p class="fst-italic" style={{marginTop:4,marginBottom:0}}>
                                Welcome to Dynamic Dental Care, your trusted destination for top-quality dental care. Founded by Dr. Anuj Mishra, a renowned Dental Surgeon and Implantologist, and co-founded by Dr. Shweta Mishra. We offer services for adults seeking the best dentist in Thane and specialize in pediatric dentistry to ensure a positive dental experience for your children. 

                                </p>
                                <List>
                                    {explist.map((item, i) => (
                                        <ListItem
                                            key={item}
                                        >
                                            <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: 'primary.main' }} />
                                            {item}
                                        </ListItem>
                                    ))}
                                </List>

                                <p>
                                Experience the difference at Dynamic Dental Care, a trusted dental clinic in Thane West and the premier choice for dental clinic near me. Your smile is our priority. Schedule your appointment today for comprehensive and personalized dental care.


                                </p>
                            </Grid>
                        </Grid>

                   
                </Box>
        </>
    );
};
export default Clinicinfo;
