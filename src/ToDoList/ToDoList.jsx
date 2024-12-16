import { ToDoListLayout } from './ToDoListLayout';
import { useEffect, useState } from 'react';
import { useRequestToDoList, useSearchInToDoList, useDebounce } from './hooks';
import { addItem, deleteItem, changeItem, sortAlphabetOrder } from './funcs';

export const ToDoList = () => {
	const [refreshToDos, setRefreshToDos] = useState(false);
	const [selectedItem, setSelectedItem] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [toDos, setToDos] = useState([]);
	const [sortButtonStatus, setSortButtonStatus] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const debouncedInput = useDebounce(searchInput, 300);

	useRequestToDoList(setToDos, refreshToDos, setIsLoading);
	useSearchInToDoList(debouncedInput, toDos, setToDos, refreshToDos, setRefreshToDos);

	return (
		<ToDoListLayout
			toDos={toDos}
			setToDos={setToDos}
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
			sortButtonStatus={sortButtonStatus}
			setSortButtonStatus={setSortButtonStatus}
		/>
	);
};
