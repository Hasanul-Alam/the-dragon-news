import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import bitcoinImage from "@/assets/side-top-news.png";
import SidebarNewsCard from "./SidebarNewsCard";
import { getAllNews } from "@/utils/getAllNews";

const Sidebar = async () => {
    const {data} = await getAllNews();
    const randomNumber = () => {
        const number = Math.ceil(Math.random() * 10);
        if(number == 0){
            randomNumber();
        }
        else{
            return number;
        }
    };
    const number = randomNumber();
  return (
    <Box className="w-full mt-5">
      <Card className="w-full">
        <CardActionArea>
          <Image
            src={data[number].thumbnail_url}
            alt="Homepage"
            width={800}
            height={500}
          />
          <CardContent>
            <Box className="w-[110px] bg-red-500 text-center text-white rounded my-3">
              <Typography>{data[number].category}</Typography>
            </Box>
            <Typography gutterBottom className="capitalize " variant="h5">
            {data[number].title.length > 25 ? data[number].title.slice(0, 25) + '...' : data[number].title}
            </Typography>
            <Typography gutterBottom variant="p" className="text-md">
            By {data[number].author.name} - {data[number].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-2">
            {data[number].details.length > 200
                ? data[number].details.slice(0, 200) + "..."
                : data[number].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <SidebarNewsCard></SidebarNewsCard>
      <SidebarNewsCard></SidebarNewsCard>
      <SidebarNewsCard></SidebarNewsCard>
      <SidebarNewsCard></SidebarNewsCard>
      <SidebarNewsCard></SidebarNewsCard>
      <SidebarNewsCard></SidebarNewsCard>
    </Box>
  );
};

export default Sidebar;
