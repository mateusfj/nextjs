'use client'
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import user from '@/public/prog.jpg'
import Link from "next/link";
import style from "@/src/theme/style"
import { useState } from "react";
import Comment from "./Comment";



const Post = () => {

    const [botao, setBotao] = useState(false);

    return (
        <Box sx={style.post.conteiner}>
            <Box sx={style.post.header}>
                <Box
                    display={"flex"}
                    gap={"1rem"}
                >
                    <Image src={user} style={style.post.img} alt="" />
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                    >
                        <Typography
                            sx={{ fontWeight: 700 }}>
                            Carlos Rangel
                        </Typography>
                        <Typography sx={{ color: style.colors.gray400 }}>
                            Dev Front-End
                        </Typography>
                    </Box>
                </Box>
                <Typography sx={{ color: style.colors.gray400 }}>
                    Publicado há 1h
                </Typography>
            </Box>
            <Box padding={"1rem 0"}>
                <Typography sx={{ marginTop: "1rem" }}>Fala galeraa{' '}👋</Typography>
                <Typography sx={{ marginTop: "1rem" }}>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare{' '}🚀</Typography>
                <Typography sx={{ marginTop: "1rem", color: style.colors.green500 }}>👉{' '}jane.design/doctorcare</Typography>
                <Typography sx={{ marginTop: "1rem" }}>
                    <Link style={style.post.link} href={"#"}>#novoprojeto{' '}</Link>
                    <Link style={style.post.link} href={"#"} >#nlw{' '}</Link>
                    <Link style={style.post.link} href={"#"}>#rocketseat</Link>
                </Typography>
            </Box>
            <Divider
                sx={{ background: style.colors.gray600 }} />
            <form>
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
            <Comment/>
        </Box>
    );
}

export default Post;