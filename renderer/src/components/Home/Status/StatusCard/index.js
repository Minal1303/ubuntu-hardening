import { Card, Box, CircularProgress } from '@mui/material'
import React from 'react'
import { Pie, PieChart } from 'recharts'
import { colors } from '../../../../constants'

export const StatusCard = ({ systemInfo }) => {
  console.log(systemInfo)
  return (
    <Card
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CircularProgress 
        variant='determinate'
        value={systemInfo.data}
        sx={{
          color: (systemInfo.name === "Battery" || systemInfo.name === "Memory Available") ? parseInt(systemInfo.data)  > 70 ? "#025922" : parseInt(systemInfo.data) > 40 ? "#e6bf00" : "#b80202" : parseInt(systemInfo.data)  > 80 ? "#b80202" : parseInt(systemInfo.data) > 40 ? "#e6bf00" : "#025922",
          width: "100px!important",
          height: "100px!important"
        }}
      />
      <Box

      >
        {systemInfo.name}: {systemInfo.data}
      </Box>
    </Card>
  )
}

