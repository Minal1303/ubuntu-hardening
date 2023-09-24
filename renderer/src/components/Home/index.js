"use client";

import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import sudo from "sudo-prompt";
import { Heading } from './Heading';
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { StatusCard } from './Status/StatusCard';
import { Status } from './Status';
import { ActivityGraph } from './RightSide/ActivityGraph';
import FrequentActivities from './Status/FrequentActivities';

export const Home = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        // maxHeight: "100vh",
        // overflow: "hidden",
        maxWidth: "93vw",
      }}
    >
      {/* <Heading /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <Status />
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%", 
          }}
        >
          <FrequentActivities />
        </Box>
      </Box>
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