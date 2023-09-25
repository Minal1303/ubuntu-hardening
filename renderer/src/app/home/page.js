import { Box } from "@mui/material"
import { Home } from "../../components/Home"
import { Heading } from "../../components/Home/Heading"


function index() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // width: "100%",
        // height: "100vh",
        // overflowY: "hidden!important"
      }}
    >
      <Heading />
      <Box
        sx={{
          // width: "100%",
          // height: "100%",
          // overflowY: "scroll"
        }}
      >
        <Home />
      </Box>
    </Box>
  )
}

export default index
