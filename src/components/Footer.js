import PropTypes from "prop-types";

//Material UI

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Style = {
  textFooter: {
    fontWeight: 700,
  },
};

const Footer = (props) => {
  return (
    <Box
      component="footer"
      minHeight={{ xs: 140, sm: 100, md: 60 }}
      sx={{
        width: "100%",
        backgroundColor: "#1976D2",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography
            style={Style.textFooter}
            align="center"
            mb={{ xs: 1, sm: 1, md: 0 }}
            p={2}
          >
            Este proyecto fue creado con React JS, Material UI, formik y
            moment.js
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            item
            style={Style.textFooter}
            align="center"
            mb={{ xs: 0, sm: 1, md: 0 }}
            p={2}
          >
            {" "}
            Dev: Manuel Ortiz{" "}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Footer.propTypes = {
  window: PropTypes.func,
};

export default Footer;
