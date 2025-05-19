import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Drgallery1 from "./Drgallery1";


const explist = [
    'Experienced team of professionals dedicated to improving and maintaining your oral health.',
    'Comprehensive range of services, including preventive dentistry, root canal treatment, and dental implants.',
    'Utilization of the latest advancements in dental technology for precise diagnoses and efficient treatments.',
    'Warm and welcoming environment ensuring patient comfort and relaxation throughout their dental journey.',
    'Specialization in children\'s dentistry for a positive dental experience for young patients.',
    'Skilled dental surgeon providing advanced dental treatments to address diverse oral health needs.',

];
const Clinicinfo1 = () => {
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
            <section id="about" class="about" style={{ background: 'white' }}>

                <Grid container spacing={3} >
                    <Grid item xs={12} md={5}>
                        <Drgallery1 />
                       </Grid>
                    <Grid item xs={12} md={7} textAlign='justify'>
                        <Typography variant="h1" sx={{ fontSize: { xs: 27, md: 33 }, mt: { xs: 3, md: 0 } ,textAlign:'left'}}> Best Dentist in Airoli, Navi Mumbai</Typography>
                        <p class="fst-italic" style={{ marginTop: 4, marginBottom: 0 }}>
                            Welcome to Dynamic Dental Care, your ultimate destination for top-quality dental care. Led by Dr. Shweta Mishra, a renowned Dental Surgeon with over 8+ years of expertise and recognized as the best dentist in Airoli, together with co-founder Dr. Anuj Mishra, we are dedicated to delivering exceptional dental services. Join us on a journey towards a healthier, more vibrant smile today!

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
                            Experience the difference, where your smile is our priority. Schedule your appointment today with the best dentist near me for comprehensive and personalized dental care.
                        </p>
                    </Grid>
                </Grid>

            </section>
        </>
    );
};
export default Clinicinfo1;
