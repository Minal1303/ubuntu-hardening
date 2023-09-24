import { Box } from '@mui/material'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { colors } from '../../../../constants';

const data = [
  {
    name: 'Monday',
    activities: 0
  },
  {
    name: 'Tuesday',
    activities: 7
  },
  {
    name: 'Wednesday',
    activities: 15
  },
  {
    name: 'Thursday',
    activities: 1
  },
  {
    name: 'Friday',
    activities: 10
  },
  {
    name: 'Saturday',
    activities: 5
  },
  {
    name: "Sunday",
    activities: 3
  }
];

export const ActivityGraph = () => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "350px",
        p: "10px",
        backgroundColor: colors.charcoal,
        borderRadius: "20px"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 25,
            left: -25,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activities" stroke={colors.peach} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

