import { useState } from "react";
import PropTypes from "prop-types";

//Material UI

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ListCompleted = () => {
  return (
    <Box
    >
      <Typography variant="h3">Tareas realizadas</Typography>
      <ul>
        <li>
          {" "}
          <s>tarea 1</s>{" "}
        </li>
        <li>
          <s>tarea 2</s>{" "}
        </li>
        <li>
          <s> tarea 3</s>{" "}
        </li>
      </ul>
    </Box>
  );
};

export default ListCompleted;
