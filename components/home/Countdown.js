import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import CountUp from "react-countup";

export default function Countdown() {
    var Details = [
        // {
        //     numbers: "2000",
        //     title: "Happy Patients"

        // },
        {
            numbers: "4000",
            title: "Crown & Bridges",
        },
        {
            numbers: "3500",
            title: "Dental Implants",
        },

        {
            numbers: "1500",
            title: " Root Canal",
        },
        {
            numbers: "500",
            title: "Smile Designing",
        },
    ];

    return (
        <div>
            <Box>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    {Details.map((item, i) => (
                        <Grid item xs={12} sm={12} md={3} key={i} alignItems='center' justifyContent='center' textAlign='center'>
                            <Card sx={{ p: 3, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                <Typography
                                    sx={{
                                        color: "#49caeb",
                                        // mb: { xs: 1, md: 2 },
                                        fontSize: { xs: 34, md: 40 },
                                        fontWeight: "bold",
                                        fontFamily: "Open Sans, sans-serif"
                                    }}
                                >
                                    <CountUp end={item.numbers} duration={5} start={200} />+
                                </Typography>
                                <Typography color="black" variant="h5">
                                    {item.title}
                                </Typography>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
