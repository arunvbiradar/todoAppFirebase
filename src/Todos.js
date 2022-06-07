import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function Todos({ todos }) {
  return (
    <List>
      {todos.map((todo, i) => (
        <ListItem key={i}>
          <ListItemText>{todo}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
