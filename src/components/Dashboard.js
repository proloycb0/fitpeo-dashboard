import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItems from './ListItems';
import { AccessTimeFilled, GridViewOutlined, Image, LocalMall, NotificationsOutlined, PeopleAlt, SearchOutlined, SettingsOutlined } from '@mui/icons-material';
import { Avatar, ButtonBase, Chip } from '@mui/material';
import OverviewChart from './OverviewChart';
import Activity from './Activity';
import OrderChart from './OrderChart';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#F5F5F5",
  color: "black",
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
    '& .MuiDrawer-paper': {
      position: 'relative',
      backgroundColor: '#263238',
      color: "gray",
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  color: theme.palette.text.secondary,
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <SearchOutlined />
            </IconButton>
            <IconButton color="inherit">
              <img src="https://media.flaticon.com/dist/min/img/flags/en.svg" alt='' width="20" height="20" loading="lazy" />
            </IconButton>
            <IconButton color="inherit">
              <GridViewOutlined />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsOutlined />
            </IconButton>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
              sx={{ width: 24, height: 24 }}
            />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: "gray" }} />
            </IconButton>
          </Toolbar>
          <List component="nav" >
            {<ListItems />}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: '50vh',
            // overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                  <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 4,
                        // maxWidth: 250,
                        height: '80px',
                        borderRadius: '15px',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sx={{ backgroundColor: '#2196f3', color: 'white', width: 55, ml: 2, mt: 2, borderRadius: '10px' }}>
                          <AccessTimeFilled sx={{ mr: 3, mt: -0.25 }} />
                        </Grid>
                        <Grid item xs container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs sx={{ ml: -4 }}>
                              <Typography variant="body2" color="text.secondary">
                                Revenue
                              </Typography>
                              <Typography variant="h6">
                                $21,456
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid sx={{ mt: 3 }}>
                            <Chip label="+2.65%" variant="outlined" color="success" size="small" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 4,
                        // maxWidth: 250,
                        height: '80px',
                        borderRadius: '15px',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sx={{ backgroundColor: '#2196f3', color: 'white', width: 55, ml: 2, mt: 2, borderRadius: '10px' }}>
                          <LocalMall sx={{ mr: 3, mt: -0.25 }} />
                        </Grid>
                        <Grid item xs container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs sx={{ ml: -4 }}>
                              <Typography variant="body2" color="text.secondary">
                                Orders
                              </Typography>
                              <Typography variant="h6">
                                5,643
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid sx={{ mt: 3 }}>
                            <Chip label="-0.82%" variant="outlined" color="error" size="small" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 4,
                        // maxWidth: 250,
                        height: '80px',
                        borderRadius: '15px',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sx={{ backgroundColor: '#2196f3', color: 'white', width: 55, ml: 2, mt: 2, borderRadius: '10px' }}>
                          <PeopleAlt sx={{ mr: 3, mt: -0.25 }} />
                        </Grid>
                        <Grid item xs container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs sx={{ ml: -4 }}>
                              <Typography variant="body2" color="text.secondary">
                                Customers
                              </Typography>
                              <Typography variant="h6">
                                45,254
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid sx={{ mt: 3 }}>
                            <Chip label="-1.04%" variant="outlined" color="error" size="small" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid>
                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        borderRadius: '15px',
                      }}
                    >
                      <OverviewChart />
                    </Paper>
                  </Grid>
                  <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 4,
                        // maxWidth: 250,
                        height: '200px',
                        borderRadius: '15px',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Activity />
                    </Paper>
                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 4,
                        // maxWidth: 250,
                        height: '200px',
                        borderRadius: '15px',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <OrderChart />
                    </Paper>
                    <Paper
                      sx={{
                        p: 2,
                        mt: 3,
                        ml: 4,
                        // maxWidth: 250,
                        height: '200px',
                        borderRadius: '15px',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Activity />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{
                      p: 2,
                      mt: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '1000px',
                    }}
                  >
                    {/* <Deposits /> */}
                  </Paper>
                </Grid>
              </Grid>
            </Grid>


            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}