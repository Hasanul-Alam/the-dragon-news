import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import bitcoinIage2 from "@/assets/bitcoin.webp";


const SidebarNewsCard = () => {
    return (
        <Box className="w-full">
            <Grid container spacing={2} className="flex items-center mt-2">
              <Grid item xs={4}>
                <Image
                  src={bitcoinIage2}
                  alt="bitcoin"
                  width={"100%"}
                  height={"100%"}
                  className="border rounded-lg"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography className="text-lg">
                  bitcoin climbs as elon musk says tesla likely to accept it
                  again
                </Typography>
                <Typography variant="p" className="text-indigo-600 text-sm">
                  Jun-16-2024
                </Typography>
              </Grid>
            </Grid>
            <hr className="mt-2" />
          </Box>
    );
};

export default SidebarNewsCard;