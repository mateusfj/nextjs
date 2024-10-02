import style from "@/src/theme/style"
import { Box, Button, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CircleIcon from '@mui/icons-material/Circle';
import Avatar from "./Avatar";
import moment from "moment";
import 'moment/locale/pt-br';

const ButtonLike = styled(Button)({
    margin: '1rem 0 1.5rem',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: "none",
    lineHeight: 1.5,
    color: style.colors.white,
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        cursor:"pointer",
        color: style.colors.green500
    },
    '&:focus': {
        borderRadius: "2px"
    },
});


const Comment = ({data}) => {
    return (
        <Box>
            <Grid container spacing={1} display={"flex"}>
                <Grid size={{md: 1 }}>
                    <Avatar hasAvatar={false} src={data.avatarUrl} />
                </Grid>
                <Grid
                    size={{ md: 11 }}
                    width={"100%"}
                >
                    <Box padding={"1rem"} sx={{ background: style.colors.gray700, borderRadius: "8px" }}>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <Typography sx={{ fontWeight: "700" }}>{data.name}</Typography>
                                <Typography variant="caption">{moment(data.publishedAt).startOf('day').fromNow()}</Typography>
                            </Box>
                            <DeleteOutlineRoundedIcon sx={{cursor:"pointer"}}/>
                        </Box>
                        <Typography sx={{ margin: "1rem 0" }}>{data.content}</Typography>
                    </Box>
                    <Box>
                        <ButtonLike variant="outlined" startIcon={<ThumbUpOffAltIcon />}>
                            Aplaudir <CircleIcon sx={{fontSize: "5px", margin:"0 0.25rem"}} /> 20
                        </ButtonLike>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )

}
export default Comment;