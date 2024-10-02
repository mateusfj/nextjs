const style = {
    colors: {

        white: "#ffffff",
        gray100: "#e1e1e6",
        gray300: "#c4c4cc",
        gray400: "#8d8d99",
        gray600: "#323238",
        gray700: "#29292e",
        gray800: "#202024",
        gray900: "#121214",

        green500: "#00875f",

    },
    Avatar: {
        avatar: {
            boxSizing: "initial" as "initial",
            borderRadius: "8px",
            border: "4px solid #202024",
            outline: "2px solid #00875f",
            heigth: "3rem",
            width: "3rem"
        },
        hasAvatar: {
            borderRadius: "8px",
            heigth: "3rem",
            width: "3rem"
        }
    },
    home: {
        container: {
            display: "flex",
            alignItems: "flex-start",
            maxWidth: "70rem",
            width: "100%",
            margin: "2rem auto",
            padding: "0 1rem",
            gap: "32px",
        }
    },
    post: {
        conteiner: {
            backgroundColor: "#202024",
            borderRadius: "8px",
            padding: "2.5rem",
            width: "100%",
            marginBottom: "2rem"
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        link: {
            textDecoration: "none",
            color: "#00875f"
        },
        textArea: {
            marginTop: "1.5rem",
            resize: "none" as "none",
            height: "100px",
            width: "100%",
            backgroundColor: "#121214",
            color: "#c4c4cc",
            padding: "1rem",
            borderRadius: "8px",
        }
    },
    Sidebar: {
        content: {
            backgroundColor: "#202024",
            borderRadius: "8px",
            overflow: "hidden",
        },
        banner: {
            width: "100%",
            height: "72px",
            objectFit: "cover" as "cover",
            marginBottom: "-35px"
        },
        editButton: {
            textTransform: "none",
            color: "#00875f",
            border: "1px solid #00875f",
            boxShadow: "none"
        }
    }
}


export default style;