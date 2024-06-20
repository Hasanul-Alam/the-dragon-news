import CategoryList from "@/components/ui/Categories/CategoryList";
import { Box, Container, Grid } from "@mui/material";

const layout = ({children}) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} sm={6}>
            <CategoryList/>
          </Grid>
          <Grid item xs={12} md={9} sm={6}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default layout;
