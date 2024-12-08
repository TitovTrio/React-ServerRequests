import { ToDoListLayout } from './ToDoListLayout';
import { useEffect, useState } from 'react';
export const ToDoList = () => {
	const [toDos, setToDos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => setToDos(data));
	}, []);

	return <ToDoListLayout toDos={toDos} />;
};
