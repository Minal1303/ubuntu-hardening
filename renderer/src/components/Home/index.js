"use client";

import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import sudo from "sudo-prompt";
import { Heading } from './Heading';
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Home = () => {

  const handleReboot = () => {
    sudo.exec("reboot", {
      name: "Electron App"
    },
      (err, stdout, stderr) => {
        if (err) console.log(err)
        return;
      }
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        maxHeight: "100vh",
        overflowY: "hidden",
        maxWidth: "93vw",
        overflowX: "hidden"
      }}
    >
      <Heading />
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          gap: "10px",
          overflowY: "hidden"
        }}
      >
        <LeftSide />
        <RightSide />
      </Box>
    </Box>
  )
}