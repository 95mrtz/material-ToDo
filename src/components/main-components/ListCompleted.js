//Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

//Moment.js
import moment from "moment";

const Style = {
  taskCompleted: {
    textDecoration: "line-through",
  },
};

const ListCompleted = ({ list, setList, completed, setCompleted }) => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing={5}
      pl={5}
      pr={5}
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item>
        <Typography variant="h3" align="center">
          Tareas realizadas
        </Typography>
      </Grid>
      {completed.length < 1 ? (
        <Typography variant="h5" align="center" mt={4}>
          No hay nada por acá, hora de completar tus tareas
        </Typography>
      ) : (
        <Grid item>
          <List>
            {completed.map((element) => (
              <ListItem
                key={element.id}
                id={element.id}
                name={`task ${element.id}`}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton dense>
                  <ListItemIcon>
                    <Checkbox
                      icon={<CheckBoxIcon />}
                      edge="start"
                      checked={true}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": `checkbox-list-label-${element.id}`,
                      }}
                      value={element.id}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={element.id}
                    primary={
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography
                            variant="body1"
                            style={Style.taskCompleted}
                            noWrap
                          >
                            {element.task}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <IconButton edge="end" aria-label="time-ago">
                            <Button
                              variant="text"
                              startIcon={<AccessTimeIcon />}
                            >
                              {moment(element.date).fromNow()}
                            </Button>
                          </IconButton>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      )}
    </Grid>
  );
};

export default ListCompleted;
