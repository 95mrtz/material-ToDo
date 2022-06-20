import { useState } from "react";
import PropTypes from "prop-types";

//Material UI

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const drawerWidth = 240;

const Style = {
  iconLink: {
    color: "black",
  },
};

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TodoList
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <a
                style={Style.iconLink}
                href="https://github.com/hctmanuelortiz"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </ListItemText>
            <ListItemText>
              <a
                style={Style.iconLink}
                href="https://twitter.com/htcmanuelortiz"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </ListItemText>
            <ListItemText>
              <a
                style={Style.iconLink}
                href="https://www.youtube.com/watch?v=G1IbRujko-A"
                target="_blank"
                rel="noreferrer"
              >
                <AutoAwesomeIcon />
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header" sx={{ display: "flex" }} maxWidth="xl">
      <AppBar color="secondary" component="nav" position="sticky">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TodoList
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
