import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { NotificationCard } from '../Notificationcard'
import { colors } from '../../../../constants';

const notificationsData = [
    {
        title: "Prathmesh Chavan",
        message: "Detected a security breach in our network.",
        time: "20:53 Tue",
        img: "https://wallpapers-clan.com/wp-content/uploads/2023/03/boy-with-blue-glowing-eyes-anime-wallpaper.jpg"
    },
    {
        title: "John Doe",
        message: "Updated firewall rules to enhance security.",
        time: "15:20 Wed",
        img: "https://wallpapers-clan.com/wp-content/uploads/2023/05/cute-anime-boy-art-wallpaper.jpg"
    },
    {
        title: "Alice Johnson",
        message: "Urgent: Unusual login activity detected.",
        time: "09:45 Fri",
        img: "https://bestideadiy.com/wp-content/uploads/2023/06/bigred_cute_anime_boy_with_black_hair_and_big_blue_by_sketchesbydani_dfndnu7-pre.jpg"
    },
    {
        title: "Jane Smith",
        message: "Scheduled a security audit for next week.",
        time: "14:10 Mon",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsER8tljdmV_ExdBYMKiOax79qC0ypUPICHZJI-Jwt3elmkPwXW8JHLssOspXFtZmrb0&usqp=CAU"
    },
    {
        title: "Bob Brown",
        message: "Installed latest antivirus updates on all devices.",
        time: "18:30 Sat",
        img: "https://wallpapers.com/images/featured/gaming-anime-eo63qvwzkh9bd5xm.jpg"
    },
    {
        title: "Emily Davis",
        message: "Password policy reminder: Update passwords regularly.",
        time: "22:15 Thu",
        img: "https://w0.peakpx.com/wallpaper/137/628/HD-wallpaper-nothing-short-hair-laptop-cool-anime-girl-beatiful-kawaii.jpg"
    },
    {
        title: "Michael Wilson",
        message: "Security training session on Friday at 2 PM.",
        time: "08:05 Sun",
        img: "https://w0.peakpx.com/wallpaper/597/150/HD-wallpaper-anime-room-laptop-computer-original-feet-black-hair.jpg"
    },
    {
        title: "Sophia Lee",
        message: "Phishing email alert: Exercise caution with unknown links.",
        time: "12:00 Wed",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKCSQwIEo8c0Kjq5hvLqDEknLHb3TAjdLmg&usqp=CAU`"
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
                backgroundColor: colors.charcoal,
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
                {notificationsData.map((n, i) => <NotificationCard img={n.img} time={n.time} message={n.message} title={n.title} />)}
            </Box>
        </Box>
    )
}

