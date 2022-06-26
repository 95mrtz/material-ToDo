import { useState } from "react";
import PropTypes from "prop-types";

//Material UI

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const drawerWidth = 240;

const Style = {
  titleLogo: {
    fontWeight: 900,
  },
  iconLink: {
    color: "white",
  },
  textLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: "gray",
  },
};

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} xs={{ bgcolor: "blue" }}>
      <Typography variant="h6" sx={{ my: 2 }} align="center" color="primary" fontWeight={900}>
        Material To Do
      </Typography>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <List>
          <Grid item mt={2} mb={2}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GitHubIcon  color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <a
                    style={Style.textLink}
                    href="https://github.com/hctmanuelortiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item mt={2} mb={2}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkedInIcon  color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <a
                    style={Style.textLink}
                    href="https://www.linkedin.com/in/hctmanuelortiz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item mt={2} mb={2}>
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <TwitterIcon  color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <a
                    style={Style.textLink}
                    href="https://twitter.com/htcmanuelortiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Twitter
                  </a>
                </ListItemText>
              </ListItem>
            </ListItemButton>
          </Grid>
          <Grid item mt={2} mb={2}>
            <ListItemButton>
              <ListItemText>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <a
                  style={Style.textLink}
                  href="https://www.youtube.com/watch?v=G1IbRujko-A"
                  target="_blank"
                  rel="noreferrer"
                >
                  it's Magic!
                </a>
              </ListItemText>
            </ListItemButton>
          </Grid>
          <Grid item mt={2} mb={2}>
            <ListItemButton>
              <ListItemText align="center">
                <ListItemIcon>
                  <LogoDevIcon  color="primary" />
                </ListItemIcon>
                <Typography align="center">
                  Este proyecto fue creado con React JS, Material UI, formik y
                  moment.js
                </Typography>
              </ListItemText>
            </ListItemButton>
          </Grid>
        </List>
      </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header" sx={{ display: "flex" }}>
      <AppBar color="primary" component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
          >
            <TaskAltIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            style={Style.titleLogo}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Material To Do
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>
              <a
                style={Style.iconLink}
                href="https://github.com/hctmanuelortiz"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <a
                style={Style.iconLink}
                href="https://www.linkedin.com/in/hctmanuelortiz/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <a
                style={Style.iconLink}
                href="https://twitter.com/htcmanuelortiz"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <a
                style={Style.iconLink}
                href="https://www.youtube.com/watch?v=G1IbRujko-A"
                target="_blank"
                rel="noreferrer"
              >
                <AutoAwesomeIcon />
              </a>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          color="primary"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
