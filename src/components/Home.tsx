import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/carlosrangelns95.png",
      name: "Carlos Rangel",
      role: "Developer PHP/JS"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: "2024-09-18 20:00:00"
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/dayssonrodrigues.png",
      name: "Daysson Rodrigues",
      role: "Developer Javascript"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: "2024-09-29 20:00:00"
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/tiagoyuga.png",
      name: "Tiago Yuga",
      role: "Developer Laravel"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: "2024-10-02 16:00:00"
  }
]

const user = {
  avatarUrl: "https://github.com/mateusfj.png",
  name: "Mateus Sousa",
  role: "Fullstack Developer"
}

const Home = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      margin={"2rem 1rem"}
    >
      <Grid container
        spacing={2}
        maxWidth={"1120px"}
        justifyContent={"center"}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <Sidebar user={user} />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          {
            posts.map(post => {
              return <Post author={post.author} content={post.content} publishedAt={post.publishedAt}/>
            })
          }
        </Grid>
      </Grid>
    </Box>
  );
}
export default Home;