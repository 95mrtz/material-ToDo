//Material UI
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';


const Style = {
  title:{
    fontWeight: 500,
    color: "#757575"
  },
  titleImportart: {
    fontWeight: 900,
    color: "#1976D2",
  },
  subtitle:{
    fontWeight: 500,
    color: "#757575"
  },
  contadorText:{
    fontWeight: 500,
    color: "#757575"
  },
  contador: {
    fontWeight: 600,
    color: "#1976D2",
  }
}

const Title = ( { contador} ) => {
  
  return (
    <Box 
    mt={2}
    >
        <Typography variant="h2" color="action" fontSize={{xs: 28, sm: 36, md: 48, lg: 60 }} mb={2} px={2} align="center" style={Style.title}>
            <span style={Style.titleImportart}>Organiza</span> tu vida, <span style={Style.titleImportart}>completa</span> tus tareas y <span style={Style.titleImportart}>disfruta</span> del dia
        </Typography>
        <Typography color="action" fontSize={{xs: 21, sm: 27, md: 30, lg: 40}} variant="h4" align="center" px={3} style={Style.subtitle}>
            Conseguir tus metas diarias te ayudara a tener un dia mucho mas productivo 
        </Typography>
        <Typography color="action" fontSize={{xs: 15, sm: 20, md: 25, lg: 30}} variant="h5" align="center" px={4} mt={3} style={Style.contadorText}>
            Has agregado un total de: <span style={Style.contador}> {contador} tareas</span>
        </Typography>
    </Box>
  );
};

export default Title;
