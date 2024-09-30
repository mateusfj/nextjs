"use client";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", backgroundColor: "#202024", p: 2, }}>
        <Image src={logo} alt="Logo"/>
        <strong>ignite</strong>
      </Box>
    </>
  );
};

export default Header;
