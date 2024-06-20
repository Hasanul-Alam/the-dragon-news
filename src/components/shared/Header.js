import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "@/assets/The Dragon News.png";
import { getCurrentDateInfo } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDateInfo();
    const day = currentDate.day;
    const month = currentDate.month;
    const date = currentDate.date;
    const year = currentDate.year;
  return (
    <Box>
      <Container className="w-full my-3">
        <Image
          src={headerImage}
          height={500}
          width={500}
          alt="header-logo"
          className="mx-auto"
        />
        <Typography variant="body2" color={"gray"} textAlign={"center"} className="my-3">
          Journalism Without Fear or Favour
        </Typography>
        <Typography className="text-center">{day}, {month}, {date}, {year}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
