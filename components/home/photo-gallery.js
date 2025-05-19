import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import PhotoCardItem from "../course/photo-card-item";
const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: { xs: "-70px !important", md: "-28px !important" },
        left: "unset !important",
        right: type === "prev" ? "60px !important" : "0 !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};
const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "relative",
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: "left",
    "& li": {
      
      marginRight: theme.spacing(2),
      "& > div": {
        backgroundColor: "#fff", // white for non-active
      
       
      },
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
const Photogallery = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    adaptiveheight: false,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 8,
          width: 30,
          backgroundColor: "divider",
          display: "flex",
          borderRadius: 4,
        }}
      />
    ),
  };
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#f7fcfc", // fallback color
        backgroundImage: 'url("/images/testiback2.jpg")',
        backgroundSize: "contain",            // cover the entire box
        backgroundPosition: "center",       // center the image
        backgroundRepeat: "repeat",  
          
      }}
    >
      <Container>
        <div class="section-title">
          <h2 style={{color:'white'}}>Smile Gallery</h2>
          <p style={{color:'white',marginTop:-5}}>Where Happiness Shines Bright</p>
        </div>
        <Slider {...sliderConfig}>
          {/* {data.map((item) => (<PhotoCardItem key={String(item.id)} item={item} />))} */}
          {[...Array(7)].slice(0).map((e, i) => (
            <PhotoCardItem key={i} item={i + 1} />
          ))}
        </Slider>
      </Container>

    </section>
  );
};
export default Photogallery;
