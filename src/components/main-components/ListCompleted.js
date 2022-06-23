//Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
  timexs: {
    fontSize: "12px",
    color: "gray",
  },
  clockIcon: {
    margin: "0 5px",
    fontSize: "16px",
    color: "gray",
  },
  delete: {
    cursor: "pointer",
    color: "red",
  },
};

const ListCompleted = ({ listTask, setListTask, completed, setCompleted }) => {
  
  const handleIncompleteTask = (e) => {
    console.log(e.target.value)
    const result = completed?.filter((element) => {
      console.log("entre")
      if (element.id !== Number(e.target.value)) {
        console.log("se filtro el resultado")
        return element;
      }

      if (element.id === Number(e.target.value)) {
        console.log("entre para añadir a la otra lista")
        listTask.push(element); 
        setListTask(listTask);
      }
    });

    console.log(listTask)
    console.log(result)

      setCompleted(result);

    };
  
  const handleDelete = (e) => {
    const result = completed?.filter(
      (element) => element.id !== Number(e.target.value)
    );

    setCompleted(result);
  };

  return (
    <Grid
      container
      direction="column"
      pl={{ xs: 1, sm: 3, md: 7, lg: 9, xl: 15 }}
      pr={{ xs: 1, sm: 3, md: 7, lg: 9, xl: 15 }}
      justifyContent="space-around"
      alignItems="stretch"
      xs="auto"
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
        <List>
          <Grid item wrap="noWrap" xs="auto">
            {completed.map((element) => (
              <ListItem
                key={element.id}
                id={element.id}
                name={`task ${element.id}`}
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
                      onClick={handleIncompleteTask}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={element.id}
                    primary={
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography
                            style={Style.taskCompleted}
                            variant="body1"
                            noWrap={true}
                          >
                            {element.task}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            style={Style.timexs}
                            aria-label="time-ago"
                            variant="text"
                          >
                            <AccessTimeIcon style={Style.clockIcon} /> {moment(element.date).fromNow()}
                          </Button>
                          <Button>
                            <ListItemIcon>
                              <Checkbox
                                icon={<DeleteIcon style={Style.delete} />}
                                edge="end"
                                checked={false}
                                disableRipple
                                inputProps={{
                                  "aria-labelledby": `delete-task-list-label-${element.id}`,
                                }}
                                value={element.id}
                                onClick={handleDelete}
                              />
                            </ListItemIcon>
                          </Button>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Grid>
        </List>
      )}
    </Grid>
  );
};

export default ListCompleted;
