import { useState } from "react";
import PropTypes from "prop-types";

//Material UI

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";



const ListTask = ( { list, setList } ) => {
  
  return (
    <Box>
        <Typography variant="h3">
            Tareas por realizar 
        </Typography>
        <ul>
          {
          list.map( (element) => (
            <li index={element.id}> {element.task} </li>
          ))
        }
        </ul>
        
      
    </Box>
  );
};

export default ListTask;
