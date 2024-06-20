import { Box, Button, Container, IconButton, Typography } from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black" }} className="py-5 px-2 mt-5">
      <Container>
        <Box className="w-full text-center">
          <IconButton sx={{ px: 1, color: "white" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ px: 1, color: "white" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ px: 1, color: "white" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ px: 1, color: "white" }}>
            <YouTubeIcon />
          </IconButton>
        </Box>

        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>

        <Box>
          <Typography variant="body2" color={'gray'} textAlign={'center'}>
            @2023 The Dragon News. Design by Programming Hero.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
