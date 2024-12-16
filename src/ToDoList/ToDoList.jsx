import { ToDoListLayout } from './ToDoListLayout';
import { useEffect, useState } from 'react';
import { useRequestToDoList, useSearchInToDoList } from './hooks';
import { addItem, deleteItem, changeItem } from './funcs';

export const ToDoList = () => {
	const [refreshToDos, setRefreshToDos] = useState(false);
	const [selectedItem, setSelectedItem] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [toDos, setToDos] = useState([]);
	const [sortButtonStatus, setSortButtonStatus] = useState(false);

	useRequestToDoList(setToDos, refreshToDos, setIsLoading);
	useSearchInToDoList(searchInput, toDos, setToDos, refreshToDos, setRefreshToDos);

	const sortAlphabetOrder = () => {
		setSortButtonStatus(!sortButtonStatus);
		!sortButtonStatus
			? setToDos(
					toDos.sort((a, b) => {
						let nameA = a.title.toLowerCase(),
							nameB = b.title.toLowerCase();
						if (nameA < nameB) return -1;
						if (nameA > nameB) return 1;
						return 0;
					}),
				)
			: setRefreshToDos(!refreshToDos);
	};

	return (
		<ToDoListLayout
			toDos={toDos}
			addItem={addItem}
			refreshToDos={refreshToDos}
			setRefreshToDos={setRefreshToDos}
			selectedItem={selectedItem}
			setSelectedItem={setSelectedItem}
			deleteItem={deleteItem}
			changeItem={changeItem}
			isLoading={isLoading}
			searchInput={searchInput}
			setSearchInput={setSearchInput}
			sortAlphabetOrder={sortAlphabetOrder}
		/>
	);
};
