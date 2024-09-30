import { Box, Typography } from "@mui/material";
import Image from "next/image";
import user from '@/public/prog.jpg'

const Post = () => {
    return (
        <Box sx={{ backgroundColor: "#202024", borderRadius: "8px", padding: "2.5rem", width: "80%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <Image src={user} width={60} height={60} style={{ borderRadius: "8px" }} alt=""/>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography sx={{ fontWeight: 700 }}>Carlos Rangel</Typography>
                    <Typography> Dev Front-End</Typography>
                </Box>
            </Box>
            <Typography>Publicado há 1h</Typography>
        </Box>
    );
}

export default Post;