//Material UI
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';


const Style = {
  title: {
    fontWeight: 700,
  }
}

const Title = ( { contador} ) => {
  
  return (
    <Box 
    mt={4}
    mb={3}
    xs={{
      backgroundColor:"red",
    }}>
        <Typography variant="h2" mb={2} align="center">
            <span style={Style.title}>Organiza tus tareas</span> y disfruta del dia
        </Typography>
        <Typography variant="h3" align="center">
            Conseguir tus metas diarias para un dia mucho mas productivo 
        </Typography>
        <Typography variant="h5" align="center" mt={4}>
            Has agregado un total de: {contador} tareas
        </Typography>
    </Box>
  );
};

export default Title;
