'use client'
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/public/prog.jpg"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import style from "../theme/style";
import Avatar from "./Avatar";



const Sidebar = ({ user }) => {
    return (
        <Box sx={style.Sidebar.content}>
            <Image
                src={image}
                style={style.Sidebar.banner}
                alt="banner" />
            <Box sx={{ textAlign: "center" }}>
                <Avatar src={user.avatarUrl} />
                <Box sx={{ m: 3 }}>
                    <Typography sx={{ fontWeight: 700 }}>
                        {user.name}
                    </Typography>
                    <Typography sx={{ color: "#8d8d99" }}>
                        {user.role}
                    </Typography>
                </Box>
                <Divider style={{ background: "#323238" }} />
                <Box sx={{ padding: "1.5rem 2rem 2rem" }}>
                    <Button
                        startIcon={<BorderColorIcon />}
                        color="success"
                        variant="outlined"
                        sx={style.Sidebar.editButton}>
                        Editar seu perfil
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;