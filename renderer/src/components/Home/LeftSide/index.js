import { Box, Typography } from '@mui/material'
import React from 'react'
import { ScriptList } from "./ScriptList";
import { colors } from '../../../constants';

export const LeftSide = () => {
  return (
    <Box
      sx={{
        flex: 2,
        maxWidth: "65vw",
        overflowX: "hidden",
        maxHeight: "100vh",
        overflowY: "scroll",
        backgroundColor: colors.charcoal,
        color: "white",
        px: "15px",
        py: "10px",
        borderRadius: "20px",
        // height: "82vh"
      }}
    >
        <ScriptList />
    </Box>
  )
}

