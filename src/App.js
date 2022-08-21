// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import { add, remove, removeAll } from './components/redux/actionsCreatetors';
function App() {
  const [inputData, setInputData] = React.useState("");
  const todoList = useSelector((state) => state.todoReducer.todoList);
  // console.log("input-------", inputData)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { mt: 5, width: "400px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Write Here"
          variant="standard"
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button
          variant="outlined"
          size="small"
          onClick={() => dispatch(add(inputData),
            setInputData(''))}
        >
          + Add
        </Button>
        <Button
        onClick={()=>dispatch(removeAll())}
          variant="outlined"
          startIcon={<DeleteIcon />}>
          Delete ALL
        </Button>

      </Box>
      <Box
        sx={{

          '& > :not(style)': {
            ml: 50,
            mt: 5,
            width: 300,
            padding: 1,
          },
        }}
      >

        {
          todoList.map((list) => {
            return (
              <Paper key={list.id} elevation={3}>
                <div>
                  <h3>{list.data}</h3>
                  <h3>{list.id}</h3>
                  <Button
                    onClick={() => dispatch(remove(list.id))}
                    variant="outlined"
                    startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </div>
              </Paper>
            )

          })
        }
      </Box>
    </div>
  );
}

export default App;
