import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { History } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "5px"
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "30px",
                            fontFamily: "Poppins"
                        }}
                    >
                        Hello Ajinkya!
                    </Typography>
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
                <Box
                    sx={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center"
                    }}
                >
                    <Button
                        sx={{
                            color: "#1D5352",
                            display: "flex",
                            gap: "10px",
                            borderRadius: "50px",
                            px: "10px",
                            py: "15px"
                        }}
                        // onClick={() => router.push("/history")}
                    >
                        <History />
                        <Typography>
                            Review Activity
                        </Typography>
                    </Button>

                </Box>
            </Box>
            <Divider
                sx={{
                    backgroundColor: "#1D5352",
                    mt: "25px"
                }}
            />
        </Box>
    )
}

