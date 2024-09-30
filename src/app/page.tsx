import { Box } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

const conteiner = {
  display: "flex",
  alignItems: "flex-start",
  maxWidth: "70rem",
  width:"100%",
  margin: "2rem auto",
  padding: "0 1rem",
  gap: "32px",
}


export default function Home() {
  return (
    <main>
      <Header />
      <Box sx={conteiner}>
        <Sidebar />
        <Post/>
      </Box>
    </main>
  );
}
