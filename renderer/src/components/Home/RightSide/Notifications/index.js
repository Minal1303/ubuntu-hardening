import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { NotificationCard } from '../Notificationcard'

const notificationsData = [
    {
        title: "Prathmesh Chavan",
        message: "Detected a security breach in our network.",
        time: "20:53 Tue"
    },
    {
        title: "John Doe",
        message: "Updated firewall rules to enhance security.",
        time: "15:20 Wed"
    },
    {
        title: "Alice Johnson",
        message: "Urgent: Unusual login activity detected.",
        time: "09:45 Fri"
    },
    {
        title: "Jane Smith",
        message: "Scheduled a security audit for next week.",
        time: "14:10 Mon"
    },
    {
        title: "Bob Brown",
        message: "Installed latest antivirus updates on all devices.",
        time: "18:30 Sat"
    },
    {
        title: "Emily Davis",
        message: "Password policy reminder: Update passwords regularly.",
        time: "22:15 Thu"
    },
    {
        title: "Michael Wilson",
        message: "Security training session on Friday at 2 PM.",
        time: "08:05 Sun"
    },
    {
        title: "Sophia Lee",
        message: "Phishing email alert: Exercise caution with unknown links.",
        time: "12:00 Wed"
    }
];

export const Notifications = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: "5px",
                backgroundColor: "black",
                height: "100%",
                px: "15px",
                py: "10px",
                borderRadius: "20px",
                maxHeight: "45vh",
                overflowY: "scroll"
            }}
        >
            <Typography
                sx={{
                    color: "#05D9D7",
                    fontSize: "20px"
                }}
                className='unselectable'
            >
                Organisational Notifications
            </Typography>
            <Box
                sx={{
                    maxHeight: "100%",
                    overflowY: "scroll"
                }}
            >
                {notificationsData.map((n, i) => <NotificationCard time={n.time} message={n.message} title={n.title} />)}
            </Box>
        </Box>
    )
}

