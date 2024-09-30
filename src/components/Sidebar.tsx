'use client'
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/public/prog.jpg"
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Sidebar = () => {
    return (
        <Box sx={{
            backgroundColor: "#202024",
            borderRadius: "8px",
            overflow: "hidden",
            width: "256px"
        }}>
            <Image src={image}
                style={{
                    width: "100%",
                    height: "72px",
                    objectFit: "cover"
                }} alt="" />
            <Box sx={{ textAlign: "center" }}>
                <Box sx={{ m: 3 }}>
                    <Typography sx={{ fontWeight: 700 }}>Mateus Sousa</Typography>
                    <Typography>Fullstack Developer</Typography>
                </Box>
                <Divider style={{ background: "#323238" }} />
                <Box sx={{ padding: "1.5rem 2rem 2rem" }}>
                    <Button
                        startIcon={<BorderColorIcon />}
                        color="success"
                        variant="outlined"
                        sx={{
                            textTransform: "none"
                        }}>
                        Editar seu perfil
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;