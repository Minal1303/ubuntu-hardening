import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'


export const NotificationCard = ({ title, message, time }) => {
  return (
    <Card
            sx={{
                backgroundColor: "black",
                cursor: "pointer",
                ":hover": {
                    // boxShadow: "5px 5px 20px -15px rgba(5,217,215,0.94)"
                }
            }} 
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "white",
                        p: "10px"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px"
                        }}
                    >
                        <Avatar>
                            {title.split(" ")[0][0]}{title.split(" ")[1][0]}
                        </Avatar>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center"
                                }}
                                className='unselectable'
                            >
                                {title}
                                <Typography
                                    sx={{
                                        fontSize: "10px",
                                        color: "grey"
                                    }}
                                    className='unselectable'
                                >
                                    {time}
                                </Typography>
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "grey"
                                }}
                                className='unselectable'
                            >
                                {message}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{

                        }}
                    >
                        <Button
                            sx={{
                                color: "#1D5352"
                            }}
                        >
                            Read More...
                        </Button>
                    </Box>
                </Box>
            </Card>
  )
}

