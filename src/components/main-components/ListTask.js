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
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

//Moment.js
import moment from "moment";

const Style = {
  colorText: {
    color: "#757575"
  },
  text: {
    fontWeight: 600,
    color: "#757575"
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

const ListTask = ({ listTask, setListTask, completed, setCompleted }) => {
  const handleCompleteTask = (e) => {
    const result = listTask?.filter((element) => {
      if (element.id !== Number(e.target.value)) {
        return element;
      }

      if (element.id === Number(e.target.value)) {
        completed.push(element);
        setCompleted(completed);
      }
    });

    setListTask(result);
  };

  const handleDelete = (e) => {
    const result = listTask?.filter(
      (element) => element.id !== Number(e.target.value)
    );

    setListTask(result);
  };

  return (
    <Grid
      container
      direction="column"
      pl={{ xs: 1, sm: 3, md: 7, lg: 9, xl: 15 }}
      pr={{ xs: 1, sm: 3, md: 7, lg: 9, xl: 15 }}
      mb={{ xs: 3 }}
      justifyContent="space-around"
      alignItems="stretch"
    >
      <Grid item>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={{ xs: 700, sm: 800, md: 900 }}
          fontSize={{ xs: 20, sm: 30, md: 38, lg: 45 }}
          align="center"
        >
          Tareas por realizar
        </Typography>
      </Grid>

      {listTask.length < 1 ? (
        <Typography
        variant="body1"
        fontWeight={{ xs: 500 }}
        fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }}
        align="center"
        mt={4}
        style={Style.colorText}
        >
          No hay nada por acá, mejor agrega una tarea
        </Typography>
      ) : (
        <List>
          <Grid item noWrap>
            {listTask.map((element) => (
              <ListItem
                key={element.id}
                id={element.id}
                name={`task ${element.id}`}
                disablePadding
              >
                <ListItemButton dense>
                  <ListItemIcon>
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      edge="end"
                      checked={false}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": `checkbox-list-label-${element.id}`,
                      }}
                      value={element.id}
                      onClick={handleCompleteTask}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={element.id}
                    primary={
                      <Grid
                        container
                        direction="row"
                        justifyContent={{ xs: "center", md: "space-between" }}
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography variant="body1" wrap style={Style.text}>
                            {element.task}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            style={Style.timexs}
                            aria-label="time-ago"
                            variant="text"
                            fontWeight={{ xs: 700 }}
                          >
                            <AccessTimeIcon style={Style.clockIcon} />{" "}
                            {moment(element.date).fromNow()}
                          </Button>
                          <Button>
                            <ListItemIcon>
                              <Checkbox
                                icon={<DeleteIcon color="action" />}
                                edge="center"
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

export default ListTask;
