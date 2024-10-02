'use client'
import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Link from "next/link";
import style from "@/src/theme/style"
import { useState } from "react";
import Comment from "./Comment";
import Avatar from "./Avatar";
import moment from "moment";
import 'moment/locale/pt-br';



const Post = ({ author, content, publishedAt }) => {

    moment.locale('pt-br')

    const [botao, setBotao] = useState(false);

    function elseif(arg0: boolean) {
        throw new Error("Function not implemented.");
    }

    return (
        <Box sx={style.post.conteiner}>
            <Grid container sx={style.post.header}>
                <Grid
                    display={"flex"}
                    gap={"1rem"}
                >
                    <Avatar src={author.avatarUrl} />
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                    >
                        <Typography
                            sx={{ fontWeight: 700 }}>
                            {author.name}
                        </Typography>
                        <Typography sx={{ color: style.colors.gray400 }}>
                            {author.role}
                        </Typography>
                    </Box>
                </Grid>
                <Grid>
                    <Typography sx={{ color: style.colors.gray400 }}>
                        Públicado {moment(publishedAt).startOf('day').fromNow()}
                    </Typography>
                </Grid>
            </Grid>
            <Box padding={"1rem 0"}>
                {
                    content.map(line => {
                        if (line.type == "paragraph") {
                            return <Typography sx={{ marginTop: "1rem" }}>{line.content}</Typography>
                        }
                        if (line.type == "line") {
                            return <Link style={{ marginTop: "1rem", color: style.colors.green500 }} href={'#'}>{line.content}</Link>
                        }
                    })
                }
                <Typography sx={{ marginTop: "1rem" }}>
                    <Link style={style.post.link} href={"#"}>#novoprojeto{' '}</Link>
                    <Link style={style.post.link} href={"#"} >#nlw{' '}</Link>
                    <Link style={style.post.link} href={"#"}>#rocketseat</Link>
                </Typography>
            </Box>
            <Divider
                sx={{ background: style.colors.gray600 }} />
            <form style={{ margin: "1rem 0 " }}>
                <Typography sx={{ marginTop: "1.5rem", fontWeight: "700" }}>Deixe seu feedback</Typography>
                <textarea
                    style={style.post.textArea}
                    placeholder="Nossa, adorei amigo! Parabéns"
                    onFocus={() => setBotao(true)}
                    onBlur={() => setBotao(false)}
                >
                </textarea>
                {botao && <Button
                    variant="contained"
                    style={{
                        background: style.colors.green500,
                        textTransform: "none", fontWeight: "700",
                        marginTop: "1.25rem",
                    }}>
                    Publicar
                </Button>}
            </form>
            <Comment />
            <Comment />
        </Box>
    );
}

export default Post;