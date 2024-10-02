import style from "../theme/style";

const Avatar = ({hasAvatar = true, src}) => {
    return(
        <img src={src} style={hasAvatar ? style.Avatar.avatar : style.Avatar.hasAvatar } alt="" />
    );
}

export default Avatar;