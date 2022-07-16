import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase/compat/app";
import { query, orderBy, limit } from "firebase/firestore";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
				);
			});
	}, []);

	const addTodo = (event) => {
		event.preventDefault(); // prevents refresh event

		db.collection("todos").add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setTodos([...todos, input]);
		setInput(""); //clear up the input after submitting the button
	};

	return (
		<div className="App">
			<h1>Hello!</h1>
			<form>
				<FormControl>
					<InputLabel>Write a Todo List!!</InputLabel>
					<Input
						value={input}
						onChange={(event) => setInput(event.target.value)}
					></Input>
				</FormControl>

				<Button
					disabled={!input}
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
				>
					Add Todo
				</Button>
			</form>

			<ul>
				{todos.map((todo) => (
					<Todo todo={todo} />
					// <li>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
