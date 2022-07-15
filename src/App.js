import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	//useEffect(() => {}, dependencies);

	const addTodo = (event) => {
		event.preventDefault(); // prevents refresh event
		console.log("It's working!");
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
					<Todo text={todo} />
					// <li>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
