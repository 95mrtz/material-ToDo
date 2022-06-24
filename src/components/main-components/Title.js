//Material UI
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';


const Style = {
  title: {
    fontWeight: 900,
    color: "#1976D2",
  },
  subtitle:{
    fontWeight: 300,
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
    mb={1}
    >
        <Typography variant="h2" mb={2} align="center">
            <span style={Style.title}>Organiza</span> tu vida, <span style={Style.title}>completa</span> tus tareas y <span style={Style.title}>disfruta</span> del dia
        </Typography>
        <Typography variant="h4" align="center" style={Style.subtitle}>
            Conseguir tus metas diarias te ayudara a tener un dia mucho mas productivo 
        </Typography>
        <Typography variant="h5" align="center" mt={4} style={Style.subtitle}>
            Has agregado un total de: <span style={Style.contador}> {contador} tareas</span>
        </Typography>
    </Box>
  );
};

export default Title;
