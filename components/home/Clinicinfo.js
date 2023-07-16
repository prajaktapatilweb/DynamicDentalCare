import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { data } from "./feature.data";

const BorderLinearProgress = styled(LinearProgress, {
    shouldForwardProp: (prop) => prop !== "color",
})(({ theme, order }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        ...(order === 1 && {
            backgroundColor: "#f303ff",
        }),
        ...(order === 2 && {
            backgroundColor: "#26e8bd",
        }),
        ...(order === 3 && {
            backgroundColor: "#0063ff",
        }),
        ...(order === 4 && {
            backgroundColor: "#ffaf35",
        }),
    },
}));
const Clinicinfo = () => {
    return (
        <Box
            id="feature"
            sx={{ py: { xs: 10, md: 14 }, backgroundColor: "background.paper" }}
        >
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ position: "relative", border: "3px solid black" }}>
                            <Image
                                src="/images/clinicphoto2.png"
                                height={100}
                                width={100}
                                layout="responsive"
                                alt="Feature img"
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -39,
                                    right: { xs: 0, md: -35 },
                                    boxShadow: 2,
                                    borderRadius: 1,
                                    px: 2.2,
                                    py: 1.4,
                                    zIndex: 1,
                                    backgroundColor: "background.paper",
                                    width: 190,
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 1 }}>
                                    Why Choose Us:
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Safety & Sanitation
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={1}
                                    />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Quality Care
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={2}
                                    />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Patient-Focused Culture
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={3}
                                    />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Experienced Dentist & Team
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={4}
                                    />
                                </Box>
                            </Box>


                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography
                            component="h2"
                            sx={{
                                position: "relative",
                                fontSize: { xs: 40, md: 50 },
                                ml: { xs: 0, md: 4 },
                                mt: 2,
                                mb: 3,
                                lineHeight: 1,
                                fontWeight: "bold",
                            }}
                        >
                            About{" "}
                            <Typography
                                component="mark"
                                sx={{
                                    position: "relative",
                                    color: "primary.main",
                                    fontSize: "inherit",
                                    fontWeight: "inherit",
                                    backgroundColor: "unset",
                                }}
                            >
                                DentAvenue <br />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: { xs: 20, md: 28 },
                                        transform: "rotate(3deg)",
                                        left: 2,
                                        "& img": { width: { xs: 140, md: 175 }, height: "auto" },
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                                </Box>
                            </Typography>
                            {/* Enjoyable */}
                        </Typography>

                        <Typography
                            sx={{ color: "text.secondary", mb: 2, ml: { xs: 0, md: 4 } }}
                        >
                            Welcome to Dr. Akshay's DentAvenue Dental Clinic, where your smile
                            is our top priority. Our skilled team of dental professionals is
                            dedicated to delivering exceptional oral care in a comfortable and
                            friendly environment. With advanced technology and a
                            patient-centered approach, we are committed to helping you achieve
                            optimal dental health.
                        </Typography>

                        <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
                            {data.map(({ title, description, icon }, index) => (
                                <Grid key={String(index)} item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            px: 2,
                                            py: 1.5,
                                            boxShadow: 1,
                                            borderRadius: 4,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                mr: 1,
                                                backgroundColor: "primary.main",
                                                borderRadius: "50%",
                                                height: 36,
                                                width: 36,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "primary.contrastText",
                                                "& svg": {
                                                    fontSize: 20,
                                                },
                                            }}
                                        >
                                            {icon}
                                        </Box>
                                        <Box
                                            sx={{ display: "flex", flex: 1, flexDirection: "column" }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontSize: "1rem",
                                                    mb: 1,
                                                    color: "secondary.main",
                                                }}
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                sx={{ lineHeight: 1.3, color: "text.secondary" }}
                                                variant="subtitle1"
                                            >
                                                {description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Clinicinfo;
