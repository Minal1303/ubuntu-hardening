"use client";

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button } from '@mui/material';
import { ButtonComponent } from "../ButtonComponent";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useGlobalContext } from '../../../context/global';
import { Group, History, Home, Settings } from '@mui/icons-material';
import BusinessIcon from '@mui/icons-material/Business';
import { colors } from "../../../constants";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export function DrawerLeft({ children }) {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const { open, toggleOpen } = useGlobalContext();
  const sideButtons = [
    {
      icons: <Home sx={{
        width: "30px",
        height: "30px"
      }}
      />,
      text: "Home"
    },
    {
      icons: <BusinessIcon
        sx={{
          width: "30px",
          height: "30px"
        }}
      />,
      text: "Organisation"
    },
    // {
    //   icons: <Group
    //     sx={{
    //       width: "30px",
    //       height: "30px",
    //     }}
    //   />,
    //   text: "Users"
    // },
    {
      icons: <History
        sx={{
          width: "30px",
          height: "30px"
        }}
      />,
      text: "History"
    },
    {
      icons: <Settings
        sx={{
          width: "30px",
          height: "30px",
        }}
      />,
      text: "Settings"
    }
  ]

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          color: "#212121!important"
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#394053ff"
          }
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: open ? 0 : "auto",
            px: open ? "20px" : 0
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              fontFamily: "Poppins",
              color: colors.lightCyan,
              display: open ? "flex" : "none"
            }}
          >
            MineAL
          </Typography>
          <IconButton
            onClick={toggleOpen}
          >
            {!open ? <MenuIcon
              sx={{
                color: "#e0fbfcff"
              }}
            /> : <ChevronLeftIcon
              sx={{
                color: "#e0fbfcff"
              }}
            />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            py: "10px",
            // pl: "10px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: open ? "flex-start" : "center",
              justifyContent: "center",
              gap: "30px",
              mt: "60px"
            }}
          >
            {sideButtons.map((d, i) =>
              <ButtonComponent
                key={i}
                icon={d.icons}
                text={d.text}
              />
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: open ? "10px" : 0,
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "20px",
                px: open ? "20px" : 0,
                border: `1px solid ${colors.peach}`,
                py: "20px",
                borderRadius: "20px",
                backgroundColor: colors.peach
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: open ? 0 : "auto"
                }}
              >
                <Avatar
                  sx={{
                    color: "black",
                    border: `1px solid black`
                  }}
                  src={"https://staticg.sportskeeda.com/editor/2022/02/f90e1-16453117212926-1920.jpg"}
                />
                <IconButton
                  sx={{
                    display: open ? "flex" : "none"
                  }}
                >
                  <MoreVertIcon
                    sx={{
                      color: "black",
                    }}
                  />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mx: !open ? "auto" : 0,
                  // px: "20px"
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "black",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    fontWeight: 500
                  }}
                >
                  {open ? "Ajinkya Kahane" : "AK"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: colors.darkCyan,
                    display: open ? "flex" : "none"
                  }}
                >
                  kahaneajinkya051@gmail.com
                </Typography>
              </Box>
            </Box>
            {/* <Button
              sx={{
                display: "flex",
                justifyContent: !open ? "center " : "flex-start",
                gap: "10px",
                color: "white",
                borderRadius: "50px"
              }}
            >
              <Avatar
                sx={{
                  color: "black",
                }}
                src={"https://staticg.sportskeeda.com/editor/2022/02/f90e1-16453117212926-1920.jpg"}
              />
              <Typography
                sx={{
                  display: open ? "flex" : "none",
                  // color: "#05D9D7"
                }}
              >
                Ajinkya
              </Typography>
            </Button>
            <IconButton
              sx={{
                display: open ? "flex" : "none"
              }}
            >
              <MoreVertIcon
                sx={{
                color: `${colors.lightCyan}!important`,
                }}
              />
            </IconButton> */}
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        {children}
      </Box>
    </Box>
  );
}
