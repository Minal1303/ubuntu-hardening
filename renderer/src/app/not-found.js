"use client";

import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const Index = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"
            }}
        >
            <Typography
                sx={{
                    fontSize: "100px",
                    color: "#05D9D7"
                }}
            >
                &#128151;
            </Typography>
            <Typography
                sx={{
                    color: "white",
                    fontSize: "40px"
                }}
            >
                Feature being enable too soon!
            </Typography>
        </Box>
    )
}

export default Index;