import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Card, Grid, Hidden, Link } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
    KeyboardArrowDown,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from "@mui/icons-material";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import { PlayArrow } from "@mui/icons-material";
import Countdown from "../home/Countdown";

// import Link from 'next/link';

const pages = [
    { linkID: "/#home", label: "Home" },
    { linkID: "/#aboutus", label: "About Us" },
    { linkID: "/#treatments", label: "Treatments" },
    {
        label: "Services",
        submenu: [
            {
                linkID: "/services/dental-implants-in-chembur",
                label: "Dental Implants",
            },
            { linkID: "/services/root-canals-in-chembur", label: "Root Canals" },
            {
                linkID: "/services/tooth-extraction-in-chembur",
                label: "Tooth Extraction",
            },
            { linkID: "/services/teeth-braces-in-chembur ", label: "Teeth Braces " },
            {
                linkID: "/services/kids-dentist-in-chembur",
                label: "Kids Dental Care",
            },
            {
                linkID: "/services/smile-designing-in-chembur",
                label: "Smile Designing",
            },
            {
                linkID: "/services/teeth-whitening-in-chembur",
                label: "Teeth Whitening",
            },
            {
                linkID: "/services/dental-fillings-in-chembur",
                label: "Dental Fillings",
            },
            {
                linkID: "/services/crown-and-bridges-treatment-in-chembur",
                label: "Crown And Bridges ",
            },
        ],
    },
    { linkID: "/#testimonials", label: "Testimonials" },
    { linkID: "/#gallery", label: "Gallery" },
    { linkID: "/#faq", label: "FAQ" },
    { linkID: "/trainer", label: "Training" },
    { linkID: "/#contactform", label: "Contact" },
    { linkID: "/blog", label: "Blog" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [flag, setFlag] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenMobileSubMenu = () => {
        // handleCloseNavMenu()
        setFlag(!flag);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundImage: `url("/images/heroimg7.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyItems: "center",
                borderRadius: 0
            }}
        >
            <section style={{
                background: '#121f38', width: '100%', padding: 3, borderRadius: 0
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
                                    maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "50%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>
                                <Link href="" target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        09702955057
                                    </a>
                                </Link>{" "}
                                /
                                <Link href="09702955057" target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        09702955057
                                    </a>
                                </Link>
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link href="sd" target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        abc@gmail.com
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
                                    width: "50%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/AgileWatersConsulting/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>
                            <IconButton aria-label="twitter">
                                <a
                                    href="https://twitter.com/AgilewatersCo"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="twitter"
                                >
                                    <TwitterIcon sx={{ color: "white" }}></TwitterIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/agilewatersconsulting/"
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
                                    href="https://www.linkedin.com/company/agilewaters-consulting/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                    <LinkedInIcon
                                        style={{ color: "white", Width: 18, Height: 18 }}
                                    >
                                        {" "}
                                    </LinkedInIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="youtube">
                                <a
                                    href="https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </section>
            <section style={{
                background: '#121f38', width: '100%', padding: 3, background: '#121f38',
                background: 'rgba( 0, 0, 0, 0.2 )',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                textAlign: 'center', justifyContent: 'center', alignItems: 'center',
                borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
                <Toolbar disableGutters style={{ gap: 20 }} >


                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", sm: "block", md: "block", lg: "none" },
                            }}
                        >
                            {pages.map((page, i) => {
                                // if (page.submenu) {
                                //     return <AccountMenu list={page.submenu} />

                                // } else {
                                return (
                                    <>
                                        <Link
                                            key={i}
                                            href={page.linkID}
                                            sx={{
                                                fontWeight: 800,
                                                letterSpacing: ".1rem",
                                                color: "black",
                                                textDecoration: "none",
                                                textAlign: "center",
                                            }}
                                        >
                                            <MenuItem
                                                key={page}
                                                onClick={
                                                    page.submenu
                                                        ? handleOpenMobileSubMenu
                                                        : handleCloseNavMenu
                                                }
                                            >
                                                <Grid container direction="row" alignItems="center">
                                                    {page.label} {page.submenu && <KeyboardArrowRight />}
                                                </Grid>
                                            </MenuItem>
                                        </Link>
                                        {page.submenu &&
                                            flag &&
                                            page.submenu.map((item) => {
                                                return (
                                                    <Card sx={{ background: "#F0F0F0" }}>
                                                        <Link
                                                            key={i}
                                                            href={item.linkID}
                                                            sx={{
                                                                // p: 1,
                                                                fontWeight: 800,
                                                                letterSpacing: ".1rem",
                                                                color: "black",
                                                                textDecoration: "none",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                                <Typography sx={{ pl: 5 }}>
                                                                    {item.label}
                                                                </Typography>
                                                            </MenuItem>
                                                        </Link>
                                                    </Card>
                                                );
                                            })}
                                    </>
                                );
                            })}
                        </Menu>
                    </Box>
                    <Image src="/images/logo/logo1.jpg" width={150} height={100} objectFit="contain"></Image>

                    {/* dekstop menu */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex", textDecoration: "none" },
                        }}
                    >
                        {pages.map((page, i) => {
                            if (page.submenu) {
                                // return <AccountMenu list={page.submenu} />
                                {
                                    /* For Sub Menu  */
                                }
                                return (
                                    <Box sx={{ flexGrow: 0 }}>
                                        <MenuItem
                                            onClick={handleOpenUserMenu}
                                        // aria-controls={open ? 'account-menu' : undefined}
                                        // aria-haspopup="true"
                                        // aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Typography
                                                sx={{
                                                    // mx: 2,
                                                    display: {
                                                        xs: "none",
                                                        sm: "none",
                                                        md: "none",
                                                        lg: "flex",
                                                    },
                                                    fontWeight: 700,
                                                    letterSpacing: ".1rem",
                                                    // color: 'White',
                                                    textDecoration: "none",
                                                }}
                                                variant="h5"
                                            >
                                                Services <KeyboardArrowDown />
                                            </Typography>
                                        </MenuItem>

                                        <Menu
                                            sx={{ mt: "45px" }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {/* {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))} */}
                                            {page?.submenu?.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.linkID}
                                                    sx={{
                                                        // mr: 2,
                                                        fontWeight: 800,
                                                        letterSpacing: ".1rem",
                                                        color: "black",
                                                        textDecoration: "none",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <MenuItem key={i} onClick={handleCloseUserMenu}>
                                                        <Typography variant="h5">{item.label}</Typography>
                                                    </MenuItem>
                                                </Link>
                                            ))}
                                        </Menu>
                                    </Box>
                                );
                            } else {
                                return (
                                    <Link
                                        key={i}
                                        href={page.linkID}
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "none",
                                                lg: "flex",
                                            },
                                            fontWeight: 700,
                                            letterSpacing: ".1rem",
                                            color: 'White',
                                            textDecoration: "none",
                                            float: "right",
                                        }}
                                    >
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontSize: { md: 15, lg: 16, xl: 16 } }}
                                            >
                                                {page.label}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                );
                            }
                        })}
                    </Box>

                </Toolbar>
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
                            <Typography
                                variant="p"
                                sx={{ color: "white", lineHeight: 1.6, fontSize: 23 }}
                            >
                                {" "}
                                Welcome to Dynamic Dental Care
                            </Typography>
                            <Typography
                                component="h2"
                                sx={{
                                    // width: { md: 850 },
                                    position: "relative",
                                    fontSize: { xs: 35, md: 40, lg: 45 },
                                    mb: { xs: 3, sm: 2 },
                                    letterSpacing: 1.5,
                                    fontWeight: "bold",
                                    color: "white",
                                    lineHeight: 1.5,
                                }}
                            >
                                {" "}
                                Exceptional Service Soft & Gental
                            </Typography>
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: "18px",

                                    fontWeight: 400,
                                    position: "relative",

                                    "& svg": {
                                        position: "absolute",
                                        top: -7,
                                        right: -20,
                                        width: { xs: 22, md: 27 },
                                        height: "auto",
                                    },
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at tortor a nisl placerat auctor.<br></br> Quisque porttitor, mauris  vehicula, arcu dui eleifend metus, a tristique erat velit eget dolor.
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
                                        startIcon={<PlayArrow />}
                                        sx={{
                                            mb: { xs: 3, sm: 0, md: 0 },
                                            fontSize: 17,
                                            border: "3px solid",
                                            borderRadius: 1,
                                            borderColor: "#49caeb",
                                            color: "white",
                                        }}
                                    >
                                        Watch Video
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
