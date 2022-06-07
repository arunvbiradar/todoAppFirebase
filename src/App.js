import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Todos from "./Todos";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  return (
    <div className="App">
      <Typography
        variant="h5"
        component="h5"
        sx={{
          textAlign: "center",
          marginBottom: ".5em",
        }}
      >
        Todos with firebase
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={addTodo}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                size="small"
                value={input}
                label="Enter todo"
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type="submit"
                disabled={!input}
                variant="contained"
                onClick={addTodo}
              >
                Add todo
              </Button>
            </Box>
          </form>

          <Todos todos={todos} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
