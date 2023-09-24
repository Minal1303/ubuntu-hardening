import { Box } from '@mui/material'
import React from 'react'

export const Loader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                position: "absolute"
            }}
        >
            {/* <div class="wrapper"> */}
                <svg
                    className='anim'
                >
                    <text className='animText' x="50%" y="50%" dy=".35em" text-anchor="middle">
                        MineAL 
                    </text>
                </svg>
            {/* </div> */}
        </Box>
    )
}

