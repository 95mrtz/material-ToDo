import { useFormik } from "formik";
import * as yup from "yup";
import moment from 'moment';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

const validationSchema = yup.object({
  task: yup.string("Ingresa una nueva tarea").required("Es necesario ingresar una tarea"),
});

const Form = ({ task, setTask, list, setList, contador, setContador }) => {
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setTask(values.task);
      // ver como volver el input a ''
    },
  });

  useEffect( () => {
    if(task !== ''){
      console.log("me renderice")
      setContador(contador + 1)
    list.push( {task: task, id: contador, date: moment().toArray()})
    setList(list);
    console.log(list)
    }
    console.log("me rendecire pero no entre a la funcion [ EN FORM ] ")
  }, [task]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        columnSpacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={4}
        mb={4}
      >
        <Grid item sx={{ width: 1/2 }}>
          <TextField
            id="task"
            name="task"
            label="Nueva tarea"
            placeholder="Agrega una nueva tarea"
            fullWidth
            value={formik.values.task}
            onChange={formik.handleChange}
            error={formik.touched.task && Boolean(formik.errors.task)}
            helperText={formik.touched.task && formik.errors.task}
          />
        </Grid>
        <Grid item>
          <Button color="primary" variant="outlined" size="large" type="submit">
            Agregar tarea
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
