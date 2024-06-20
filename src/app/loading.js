import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Container
      className="flex flex-col items-center justify-top min-h-screen text-center mt-5"
      maxWidth="sm"
    >
      <CircularProgress size={60} />
      <Typography variant="h6" className="mt-4">
        Loading, please wait...
      </Typography>
    </Container>
  );
};

export default loading;
