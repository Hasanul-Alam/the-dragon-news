import { getCategoryNews } from "@/utils/geCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import sportsImage from "@/assets/sports.jpg";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
  //   console.log(searchParams.category);
  const news = await getCategoryNews(searchParams.category);
  const allNews = news.data;
  // console.log(allNews);
  return (
    <Box>
      <Grid container spacing={2}>
        {allNews.map((news) => (
          <Grid item xs={12} md={6} sm={6} key={news._id} className="mt-5">
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card className="w-full ">
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={100}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <Box className="w-[100px] bg-red-500 text-center text-white rounded my-3">
                      <Typography>{news.category}</Typography>
                    </Box>
                    <Typography gutterBottom className="capitalize text-lg">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom variant="p" className="text-md">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="my-2"
                    >
                      {news.details.length > 200 ? news.details.slice(0, 200) + '...' : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNewsPage;
