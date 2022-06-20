import PropTypes from "prop-types";

//Material UI

import Container from "@mui/material/Container";
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


const Footer = (props) => {
  
  return (
    <Box component="footer" sx={{ width: '100%', height: "40px", backgroundColor: "gray"}}>
       <Typography>
        Footer
        </Typography> 
    </Box>
  );
};

Footer.propTypes = {
  window: PropTypes.func,
};

export default Footer;
