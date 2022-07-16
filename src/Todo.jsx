import {
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Modal,
} from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
import React, { useState } from "react";
import {
	ThemeProvider,
	createMuiTheme,
	makeStyles,
} from "@mui/material/styles";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		position: "absolute",
// 		width: 400,
// 		backgroundColor: theme.palette.background.paper,
// 		border: "2px solid #000",
// 		boxShadow: theme.shadows[5],
// 		padding: theme.spacing(2, 4, 3),
// 	},
// }));

function Todo(props) {
	//const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [input, setInput] = useState();

	const handleOpen = () => {
		setOpen(true);
	};

	const updateTodo = () => {
		//update the todo with new input text
		db.collection("todos").doc(props.todo.id).set(
			{
				todo: input,
			},
			{ merge: true }
		);
		setOpen(false);
	};

	return (
		<>
			<Modal open={open} onClose={(e) => setOpen(false)}>
				<div>
					<h1> I am a Modal! </h1>
					<input
						placeholder={props.todo.todo}
						value={input}
						onChange={(event) => setInput(event.target.value)}
					></input>
					<Button onClick={updateTodo}>Update Todo</Button>
				</div>
			</Modal>
			<List className="todo_list">
				<ListItem>
					<ListItemAvatar></ListItemAvatar>
					<ListItemText primary={props.todo.todo} />
				</ListItem>
				<Button onClick={(e) => setOpen(true)}> Edit</Button>
				<DeleteForeverIcon
					onClick={(event) =>
						db.collection("todos").doc(props.todo.id).delete()
					}
				>
					Delete
				</DeleteForeverIcon>
			</List>
		</>
	);
}

export default Todo;
