"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const style = {
  backgroundColor: "#202024",
  p: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px"
}

const Header = () => {
  return (
    <>
      <Box sx={style}>
        <Image src={logo}
          alt="Logo"
          height={32} />
        <Typography sx={{
          fontWeight: 700,
          fontSize: "1rem"
        }}>
          ignite Feed
        </Typography>
      </Box>
    </>
  );
};

export default Header;
