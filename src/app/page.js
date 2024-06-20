import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { getAllNews } from "@/utils/getAllNews";
import Image from "next/image";
import sideBottomImage from "@/assets/side-bottom-img.png";
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import SidebarNewsCard from "@/components/ui/Sidebar/SidebarNewsCard";

const HomePage = () => {
  // console.log(data[0]);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8} className="">
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
