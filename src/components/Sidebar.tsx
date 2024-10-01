'use client'
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/public/prog.jpg"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import style from "../theme/style";

const perfil = {
    boxSizing: "initial" as "initial",
    marginTop: "-35px",
    borderRadius: "8px",
    width: "3rem",
    height: "3rem",
    border: "4px solid #202024",
    outline: "2px solid #00875f"
}

const Sidebar = () => {
    return (
        <Box sx={{
            backgroundColor: "#202024",
            borderRadius: "8px",
            overflow: "hidden",
            // width: "256px"
        }}>
            <Image src={image}
                style={{
                    width: "100%",
                    height: "72px",
                    objectFit: "cover",
                }} alt="" />
            <Box sx={{ textAlign: "center" }}>
                <img src="https://github.com/mateusfj.png" style={perfil} alt="" />
                <Box sx={{ m: 3 }}>
                    <Typography sx={{ fontWeight: 700 }}>Mateus Sousa</Typography>
                    <Typography sx={{color:"#8d8d99"}}>Fullstack Developer</Typography>
                </Box>
                <Divider style={{ background: "#323238" }} />
                <Box sx={{ padding: "1.5rem 2rem 2rem" }}>
                    <Button
                        startIcon={<BorderColorIcon />}
                        color="success"
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            color:style.colors.green500,
                            border: "1px solid #00875f",
                            boxShadow:"none"
                        }}>
                        Editar seu perfil
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;