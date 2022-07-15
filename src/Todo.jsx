import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import "./Todo.css";

function Todo(props) {
	return (
		<List className="todo_list">
			<ListItem>
				<ListItemAvatar></ListItemAvatar>
				<ListItemText primary={props.text} />
			</ListItem>
		</List>
	);
}

export default Todo;
