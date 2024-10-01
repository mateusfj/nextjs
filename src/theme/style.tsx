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
            marginBottom:"2rem"
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        img: {
            boxSizing: "initial" as "initial",
            borderRadius: "8px",
            width: "3.5rem",
            height: "3.5rem",
            border: "4px solid #202024",
            outline: "2px solid #00875f",
        },
        link: {
            textDecoration: "none",
            color: "#00875f"
        },
        textArea: {
            marginTop:"1.5rem",
            resize: "none" as "none",
            height: "100px",
            width:"100%",
            backgroundColor: "#121214",
            color: "#c4c4cc",
            padding: "1rem",
            borderRadius: "8px",
        }
    }
}


export default style;