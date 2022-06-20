import { useState } from "react";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import CssBaseline from "@mui/material/CssBaseline";

const App = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Grid
      container
      rowSpacing={2}
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <CssBaseline />
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Main />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default App;

/*

maxWidth="xl" fixed={true} xs={{
      minHeight:'100vh',
      height:1,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      backgroundColor:'red',
    }} 

    */
