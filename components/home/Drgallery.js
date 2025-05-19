import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { useTheme, styled } from "@mui/material/styles";
import {  useMediaQuery } from "@mui/material";
import Drgalleryitem from "./Drgalleryitem";

const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "relative",
        left: 0,
        bottom: -15,
        paddingLeft: theme.spacing(1),
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(2),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
const Drgallery = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        adaptiveheight: false,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "flex",
                    borderRadius: 50,
                }}
            />
        ),
    };
    return (
        <Box>


            <Slider {...sliderConfig}>
                {/* {data.map((item) => (<PhotoCardItem key={String(item.id)} item={item} />))} */}
                {[...Array(5)].slice(0).map((e, i) => (
                    <Drgalleryitem key={i} item={i + 1} />
                ))}
            </Slider>

        </Box>
    );
};
export default Drgallery;
