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
            <main id="main">
                <section id="about" class="about" style={{ background: 'white' }}>
                    <Container>

                        <Grid container spacing={3} >
                            <Grid item xs={12} md={6}>
                                <Image
                                    src="/images/clinic1.jpg"
                                    height={100}
                                    width={100}
                                    layout="responsive"
                                    objectFit="cover"
                                    alt="dr-akshays-dentavenue-dental-clinic-chembur-mumbai"
                                />
                                {/* <img src="/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" class="img-fluid" alt="" /> */}
                            </Grid>
                            <Grid item xs={12} md={6} textAlign='justify'>
                                <h1>Dynamic Dental Care - Best dentist in Thane</h1>
                                <p class="fst-italic">
                                    Welcome to Dynamic Dental Care and Implant Centre, your trusted destination for top-quality dental care in Airoli, Navi Mumbai, and Thane West. Founded by Dr. Anuj Mishra, a renowned Dental Surgeon and Implantologist, and co-founded by Dr. Shweta Mishra, our clinic is committed to delivering excellence in dental services.

                                </p>
                                <List>
                                    {explist.map((item, i) => (
                                        <ListItem
                                            key={item}
                                        >
                                            <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: '#49caeb' }} />
                                            {item}
                                        </ListItem>
                                    ))}
                                </List>

                                <p>
                                    {/* Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum */}
                                </p>
                            </Grid>
                        </Grid>

                    </Container>
                </section>
            </main>
        </>
    );
};
export default Clinicinfo;
