import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../../constants'


export const NotificationCard = ({ img, title, message, time }) => {
  return (
    <Card
            sx={{
                backgroundColor: colors.charcoal,
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
                        <Avatar
                         src={img}
                        />
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    display: "flex",
                                    gap: "12px",
                                    alignItems: "center",
                                    fontSize: "18px"
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
                                    color: colors.lightCyan
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
                                color: colors.peach
                            }}
                        >
                            Read More...
                        </Button>
                    </Box>
                </Box>
            </Card>
  )
}

