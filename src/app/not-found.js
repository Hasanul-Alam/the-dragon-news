import { Home } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import Link from "next/link";

const notFound = () => {
  return (
    <Container
      className="flex flex-col items-center justify-center min-h-screen text-center p-4"
      maxWidth="sm"
    >
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Home />}
          className="bg-blue-500 hover:bg-blue-700"
        >
          <Link href={'/'}>Go Home</Link>
        </Button>
      </div>
    </Container>
  );
};

export default notFound;
