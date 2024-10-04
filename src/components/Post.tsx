"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import style from "@/src/theme/style";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Avatar from "./Avatar";
import moment from "moment";
import "moment/locale/pt-br";

// const comments = [
//   {
//     id: 1,
//     data: {
//       avatarUrl: "https://github.com/ailsonazevedo.png",
//       name: "João Silva",
//       publishedAt: "2024-10-01 12:23:00",
//       content: "Cara muito legal isso! Parabéns!!!",
//     },
//   },
//   {
//     id: 2,
//     data: {
//       avatarUrl: "https://github.com/MatheusMagnoCosta.png",
//       name: "Pedro Nascimento",
//       publishedAt: "2024-09-28 10:45:00",
//       content: "Muito louco heheh !!!",
//     },
//   },
// ];

const Post = ({ author, content, publishedAt }) => {

  const [botao, setBotao] = useState(false);

  const [text, setText] = useState("");

  const [comments, setComment] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  function addItem() {
    console.log(comments);
    const newItem = {
      id: comments.length + 1,
      data: {
        avatarUrl: "https://github.com/ailsonazevedo.png",
        name: "João Silva",
        publishedAt: new Date(),
        content: text,
      },
    };
    const newItems = [...comments, newItem];
    setComment(newItems);
  }

  return (
    <Box sx={style.post.conteiner}>
      <Grid container sx={style.post.header}>
        <Grid display={"flex"} gap={"1rem"}>
          <Avatar src={author.avatarUrl} />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography sx={{ fontWeight: 700 }}>{author.name}</Typography>
            <Typography sx={{ color: style.colors.gray400 }}>
              {author.role}
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography sx={{ color: style.colors.gray400 }}>
            Públicado {moment(publishedAt).startOf("day").fromNow()}
          </Typography>
        </Grid>
      </Grid>
      <Box padding={"1rem 0"}>
        {content.map((line, index) => {
          if (line.type == "paragraph") {
            return (
              <Typography key={index} sx={{ marginTop: "1rem" }}>
                {line.content}
              </Typography>
            );
          }
          if (line.type == "line") {
            return (
              <Link
                key={index}
                style={{ marginTop: "1rem", color: style.colors.green500 }}
                href={"#"}
              >
                {line.content}
              </Link>
            );
          }
        })}
        <Typography sx={{ marginTop: "1rem" }}>
          <Link style={style.post.link} href={"#"}>
            #novoprojeto{" "}
          </Link>
          <Link style={style.post.link} href={"#"}>
            #nlw{" "}
          </Link>
          <Link style={style.post.link} href={"#"}>
            #rocketseat
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ background: style.colors.gray600 }} />
      <form style={{ margin: "1rem 0 " }}>
        <Typography sx={{ marginTop: "1.5rem", fontWeight: "700" }}>
          Deixe seu feedback
        </Typography>
        <textarea
          onChange={handleChange}
          style={style.post.textArea}
          placeholder="Nossa, adorei amigo! Parabéns"
          onFocus={() => setBotao(true)}
          //   onBlur={() => setBotao(false)}
        ></textarea>
        {botao && (
          <Button
            onClick={() => addItem()}
            variant="contained"
            style={{
              background: style.colors.green500,
              textTransform: "none",
              fontWeight: "700",
              marginTop: "1.25rem",
            }}
          >
            Publicar
          </Button>
        )}
      </form>
      {comments.map((comment, index) => {
        return <Comment key={index} data={comment.data} />;
      })}
    </Box>
  );
};

export default Post;
