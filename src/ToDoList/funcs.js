export const addItem = (setRefreshToDos, refreshToDos) => {
	const itemTitle = prompt('Введите название дела:');

	fetch('http://localhost:3000/toDos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: Math.floor(Math.random() * 100000),
			title: itemTitle,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRefreshToDos(!refreshToDos);
		});
};

export const changeItem = (selectedItem, setRefreshToDos, refreshToDos) => {
	const itemTitle = selectedItem && prompt('Введите новое название дела:');

	fetch(`http://localhost:3000/toDos/${selectedItem}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: selectedItem,
			title: itemTitle,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRefreshToDos(!refreshToDos);
		});
};

export const deleteItem = (selectedItem, setRefreshToDos, refreshToDos) => {
	fetch(`http://localhost:3000/toDos/${selectedItem}`, {
		method: 'DELETE',
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRefreshToDos(!refreshToDos);
		});
};
