import PropTypes from "prop-types";

//Material UI

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = (props) => {
  return (
    <Box
      component="footer"
      sx={{ width: "100%", height: "80px", backgroundColor: "#1976D2", color:"white", fontWeight: 900, display: "flex", justifyContent: "center"}}
    >
      <Grid container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      >
        <Grid item>
          <Typography>
            Este proyecto fue creado con React JS, Material UI, formik y
            moment.js
          </Typography>
        </Grid>
        <Grid item>
          <Typography> Dev: Manuel Ortiz </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Footer.propTypes = {
  window: PropTypes.func,
};

export default Footer;
