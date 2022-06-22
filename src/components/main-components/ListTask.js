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
  timexs: {
    fontSize: "12px",
    color: "gray"
  },
  delete: {
    cursor:"pointer",
    color: "red"
  }
}

const ListTask = ({ listTask, setListTask, completed, setCompleted }) => {
  const handleList = (e) => {
    console.log(e.target.value);
    console.log(listTask);
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
    console.log(listTask);
  };

  return (
    <Grid
      container
      direction="column"
      pl={{ xs: 1, sm: 3, md: 7 }}
      pr={{ xs: 1, sm: 3, md: 7 }}
      justifyContent="space-around"
      alignItems="stretch"
      xs="auto"
    >
      <Grid item>
        <Typography variant="h3" align="center">
          Tareas por realizar
        </Typography>
      </Grid>

      {listTask.length < 1 ? (
        <Typography variant="h5" align="center" mt={4}>
          No hay nada por acá, mejor agrega una tarea
        </Typography>
      ) : (
        <List>
          {listTask.map((element) => (
            <Grid item wrap="noWrap" xs="auto">
              <ListItem
                key={element.id}
                id={element.id}
                name={`task ${element.id}`}
                secondaryAction={
                    <DeleteIcon aria-label="delete" style={Style.delete} />
                    
                }
                disablePadding
              >
                <ListItemButton dense>
                  <ListItemIcon>
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      edge="start"
                      checked={false}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": `checkbox-list-label-${element.id}`,
                      }}
                      value={element.id}
                      onClick={handleList}
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
                          <Typography variant="body1" noWrap={true}>
                            {element.task}
                          </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                            style={Style.timexs}
                              aria-label="time-ago"
                              variant="text"
                              startIcon={<AccessTimeIcon />}
                            >
                              {moment(element.date).fromNow()}
                            </Button>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Grid>
          ))}
        </List>
      )}
    </Grid>
  );
};

export default ListTask;
