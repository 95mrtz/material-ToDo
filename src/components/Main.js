import { useState } from "react";
import PropTypes from "prop-types";

//Material UI
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import Form from "./main-components/Form"
import Title from "./main-components/Title"
import ListTask from "./main-components/ListTask"
import ListCompleted from "./main-components/ListCompleted"

const Main = (props) => {
    const [task, setTask ] = useState('');
    const [ listTask, setListTask ] = useState([])
    const [ contador, setContador ] = useState(0)

    console.log(task);
    console.log(listTask);
  return (
    <Grid container direction="column"
    rowSpacing={5}
    justifyContent="space-between"
    alignItems="center">
      <Grid item mt={1} mb={4}>
        <Title contador={contador}/>
      </Grid>
      <Grid item sx={{ width: 1 }} mt={4} mb={4}>
        <Form task={task} setTask={setTask} list={listTask} setList={setListTask} contador={contador} setContador={setContador} />
      </Grid>
      <Divider sx={{ width: 1 }} mt={2} mb={2} />
      <Grid item mt={4} mb={4}>
        <ListTask list={listTask} setList={setListTask} />
      </Grid>
      <Divider sx={{ width: 1 }} mt={2} mb={2} />
      <Grid item mt={4} mb={1}>
        <ListCompleted />
      </Grid>
    </Grid>
  );
};

Main.propTypes = {
  window: PropTypes.func,
};

export default Main;
