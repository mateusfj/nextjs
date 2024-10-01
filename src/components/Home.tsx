import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";


const Home = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} margin={"2rem 1rem"}>
        <Grid container spacing={2} maxWidth={"1120px"} justifyContent={"center"}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Sidebar />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Post />
            <Post />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Home;