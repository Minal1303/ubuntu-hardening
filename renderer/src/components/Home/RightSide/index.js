import { Box } from '@mui/material'
import React from 'react'
import { ActivityGraph } from "./ActivityGraph";
import { Notifications } from './Notifications';

export const RightSide = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flex: 1,
            // maxHight: "50vh",
            maxWidth: "30vw",
            flexDirection: "column",
            gap: "10px",
            overflow: "hidden"
        }}
    >
      <ActivityGraph />
      <Notifications />
    </Box>
  )
}

