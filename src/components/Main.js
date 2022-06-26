import { useState } from "react";
import PropTypes from "prop-types";

//Material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import Form from "./main-components/Form";
import Title from "./main-components/Title";
import ListTask from "./main-components/ListTask";
import ListCompleted from "./main-components/ListCompleted";

const Main = () => {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);
  const [contador, setContador] = useState(0);
  const [listCompleted, setListCompleted] = useState([]);

  console.log(task);
  console.log(listTask);
  return (
    <Grid
      container
      direction="column"
      rowSpacing={5}
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item>
        <Title contador={contador} />
      </Grid>
      <Grid item mt={2} mb={4}>
        <Form
          task={task}
          setTask={setTask}
          list={listTask}
          setList={setListTask}
          contador={contador}
          setContador={setContador}
        />
      </Grid>
      <Divider sx={{ width: 1 }} mt={3} mb={3} />
      <Grid item mt={4} mb={4}>
        <ListTask
          listTask={listTask}
          setListTask={setListTask}
          completed={listCompleted}
          setCompleted={setListCompleted}
        />
      </Grid>
      <Divider sx={{ width: 1 }} mt={2} mb={2} />
      <Grid item>
        <ListCompleted
          listTask={listTask}
          setListTask={setListTask}
          completed={listCompleted}
          setCompleted={setListCompleted}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
