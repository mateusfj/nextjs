import style from "@/src/theme/style"
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import user from "@/public/prog.jpg"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Comment = () => {
    return (
        <Box>
            <Grid container spacing={1} display={"flex"} margin={"2rem 0"}>
                <Grid size={{ md: 1 }}>
                    <Image src={user} width={50} height={50} style={{ borderRadius: "8px" }} alt="" />
                </Grid>
                <Grid
                    size={{ md: 11 }}
                    sx={{ background: style.colors.gray700, borderRadius: "8px" }}
                    width={"100%"}
                    padding={"1rem"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: "700" }}>Mateus Sousa</Typography>
                            <Typography variant="caption">Cerca de 2h</Typography>
                        </Box>
                        <DeleteForeverOutlinedIcon />
                    </Box>
                    <Typography sx={{margin:"1.5rem 0"}}>Muito Bom Devon, Parabéns!!</Typography>
                </Grid>
            </Grid>
        </Box>
    )

}
export default Comment;