import { getAllNews } from "@/utils/getAllNews";
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

const LatestNews = async () => {
    const { data } = await getAllNews();
  return (
    <Box>
      <Card className="w-full my-5">
        <CardActionArea>
          <Image
            src={data[0].thumbnail_url}
            alt="Homepage"
            width={800}
            height={400}
          />
          <CardContent>
            <Box className="w-[100px] bg-red-500 text-center text-white rounded my-3">
              <Typography>{data[0].category}</Typography>
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="capitalize"
            >
              {data[0].title}
            </Typography>
            <Typography gutterBottom variant="p" className="text-lg">
              By {data[0].author.name} - {data[0].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-2">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid container spacing={2}>
        {data.slice(0, 4).map((singleData) => (
          <Grid key={singleData.id} item xs={12} md={6} sm={6}>
            <Card className="w-full ">
              <CardActionArea>
                <Image
                  src={singleData.thumbnail_url}
                  alt="Homepage"
                  width={800}
                  height={500}
                />
                <CardContent>
                  <Box className="w-[110px] bg-red-500 text-center text-white rounded my-3">
                    <Typography>{singleData.category}</Typography>
                  </Box>
                  <Typography gutterBottom className="capitalize text-lg">
                    {singleData.title.length > 30
                      ? singleData.title.slice(0, 30) + "..."
                      : singleData.title}
                  </Typography>
                  <Typography gutterBottom variant="p" className="text-md">
                    By {singleData.author.name} -{" "}
                    {singleData.author.published_date}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="my-2"
                  >
                    {singleData.details.length > 200
                      ? singleData.details.slice(0, 200) + "..."
                      : singleData.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
