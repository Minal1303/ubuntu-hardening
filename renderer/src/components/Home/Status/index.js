import React, { useEffect, useState } from 'react'
import { StatusCard } from './StatusCard'
import { ipcRenderer } from 'electron';
import { Box, Typography } from '@mui/material';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { colors } from '../../../constants';

// import si from "systeminformation/lib/index-no-temps";
export const Status = () => {

  const [systemInfo, setSystemInfo] = useState([]);

  function calculateMemoryUsage(systemInfo) {
    const { memory } = systemInfo;
    const memoryUsedPercentage = (memory?.used / memory?.total) * 100;
    const memoryAvailablePercentage = (memory?.available / memory?.total) * 100;
    return {
      memoryUsedPercentage,
      memoryAvailablePercentage,
    };
  }

  // Function to calculate CPU usage percentage (assuming CPU usage data is available)
  function calculateCpuUsage(systemInfo) {
    const { cpu } = systemInfo;
    // Assuming you have CPU usage data available in your systemInfo object.
    // You can replace 'cpuUsage' with the actual CPU usage data property.
    const cpuUsage = cpu?.usage; // Replace with the actual CPU usage property
    return {
      cpuUsage,
    };
  }

  // Function to get battery remaining percentage
  function getBatteryPercentage(systemInfo) {
    const { battery } = systemInfo;
    return battery?.percent;
  }

  useEffect(() => {
    async function getSystemInfo() {

      ipcRenderer.invoke("get-system-info").then((systemInfo) => {
        const mem = calculateMemoryUsage(systemInfo);
        const memoryUsed = mem?.memoryUsedPercentage;
        const memoryAvailable = mem?.memoryAvailablePercentage;
        const cpuUsage = calculateCpuUsage(systemInfo).cpuUsage || 100;
        const batteryPercentage = getBatteryPercentage(systemInfo);
        setSystemInfo([{ name: "Memory Used", data: memoryUsed }, { name: "Memory Available", data: memoryAvailable }, { name: "CPU Used", data: cpuUsage }, { name: "Battery", data: batteryPercentage }])
      })
    }
    getSystemInfo();
  }, [])

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <Box
        sx={{
          width: "800px",
          height: "500px"
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={systemInfo}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar name="Ajinkya" dataKey="data" stroke={colors.darkCyan} fill={colors.lightCyan} fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </Box>
      <Typography
        sx={{
          fontSize: "40px",
          fontFamily: "Poppins",
          fontWeight: 500,
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.2)"
        }}
      >
        Statistics
      </Typography>
    </Box>
  )
}

