import { useEffect } from 'react';

export const useRequestToDoList = (setToDos, refreshToDos, setIsLoading) => {
	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3000/toDos')
			.then((response) => response.json())
			.then((data) => setToDos(data))
			.finally(() => setIsLoading(false));
	}, [refreshToDos]);
};

export const useSearchInToDoList = (
	searchInput,
	toDos,
	setToDos,
	refreshToDos,
	setRefreshToDos,
) => {
	useEffect(() => {
		searchInput
			? setToDos(toDos.filter(({ title }) => title.startsWith(searchInput)))
			: setRefreshToDos(!refreshToDos);
	}, [searchInput]);
};
