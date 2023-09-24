"use client";

import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Circle, History, NotificationAdd, NotificationImportant } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { colors } from "../../../constants";
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Heading = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const router = useRouter();

    useEffect(() => {
        // Create an interval that updates the current time every second (1000 milliseconds)
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                        gap: "5px"
                    }}
                >
                    <Typography
                        sx={{
                            color: colors.charcoal,
                            fontWeight: 600,
                            fontSize: "40px",
                            fontFamily: "Poppins"
                        }}
                    >
                        Hello Ajinkya!
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "20px"
                        }}
                    >
                        <IconButton
                            sx={{
                                position: "relative"
                            }}
                        >
                            <Circle 
                                sx={{
                                    width: "8px",
                                    height: "8px",
                                    color: "red",
                                    position: "absolute",
                                    top: "30%",
                                    right: "30%"
                                }}
                            />
                            <NotificationsIcon 
                                sx={{
                                    color: colors.charcoal
                                }}
                            />
                        </IconButton>
                        <Button
                            sx={{
                                color: colors.charcoal,
                                display: "flex",
                                gap: "10px",
                                borderRadius: "50px",
                                px: "10px",
                                py: "10px",
                                bgcolor: colors.yellow
                            }}
                        // onClick={() => router.push("/history")}
                        >
                            <History
                                sx={{
                                    color: colors.charcoal
                                }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: "Poppins",
                                }}
                            >
                                Review Activity
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "flex-start",
                        width: "100%"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            color: "gray",
                            gap: "15px"
                        }}
                    >
                        <Typography>
                            {currentTime.toLocaleDateString().slice(0, -5)}
                        </Typography>
                        <Typography>
                            {currentTime.toLocaleTimeString()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

