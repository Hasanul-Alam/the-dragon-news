import { getNewsDetail } from "@/utils/getNewsDetail";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const newsDetailPage = async ({ params }) => {
  // console.log(params);
  const { data: newsData } = await getNewsDetail(params.newsId);
  //   console.log(newsData);
  return (
    <Box className="mt-5">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Image
            src={newsData.thumbnail_url}
            width={800}
            height={500}
            alt="news"
          />

          {/* Nested grid */}
          <Grid container spacing={2} className="mt-1">
            <Grid item xs={6}>
              <Image
                src={newsData.image_url}
                alt="news"
                width={800}
                height={500}
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src={newsData.image_url}
                alt="news"
                width={800}
                height={500}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" className="">
            {newsData.title}
          </Typography>
          <Box className="flex gap-x-6 items-center my-3 text-lg font-semibold">
            <Avatar alt="news-author" src={newsData.author.img} />
            <Typography>{newsData.author.name}</Typography>
            <Typography>{newsData.author.published_date}</Typography>
          </Box>
          <Typography
            className="mt-3"
            style={{
              textAlign: "justify",
              whiteSpace: "pre-line",
              margin: "10px 0px",
              color: "gray",
            }}
          >
            {newsData.details}
          </Typography>
          <Typography className="mt-5" variant="h6">
            ``Many desktop publishing packages and web page editors now use as
            their default model text! <br /> -Jhankar Mahbub Bhai
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default newsDetailPage;
