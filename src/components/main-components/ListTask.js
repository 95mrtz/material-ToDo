//Material UI

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import moment from "moment";

const ListTask = ({ list, setList }) => {

  const handleList = (e) => {
    console.log(e.target.value);
    console.log(typeof(e.target.value));
    console.log(list)
    const result = list?.filter((element) => (element.id !== Number(e.target.value)));
    console.log("resultado del filter");
    console.log(result);
    setList(result);
    console.log(list);
    // pasar los resultados filtrados a la lista de completados
  };

  return (
    <Box>
      <Typography variant="h3">Tareas por realizar</Typography>
      {
        (
          list.length < 1 ?
          <p> No hay nada por acá, mejor agrega una tarea </p>
          :
      <ul>
        {list.map((element) => (
          <li index={element.id}>
            <input
              type="checkbox"
              id={element.id}
              name={`task${element.id}`}
              value={element.id}
              onClick={handleList}
            />
            <label htmlFor={`task${element.id}`}>
              {" "}
              {element.task} - {moment(element.date).fromNow()}{" "}
            </label>
          </li>
        ))}
      </ul>
       )}
    </Box>
  );
};

export default ListTask;
