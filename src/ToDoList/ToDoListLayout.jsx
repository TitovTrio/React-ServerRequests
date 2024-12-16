import styles from './ToDoList.module.css';

export const ToDoListLayout = ({
	toDos,
	setToDos,
	addItem,
	selectedItem,
	setSelectedItem,
	refreshToDos,
	setRefreshToDos,
	deleteItem,
	changeItem,
	isLoading,
	searchInput,
	setSearchInput,
	sortAlphabetOrder,
	sortButtonStatus,
	setSortButtonStatus,
}) => (
	<>
		<div className={styles.toDoListTitle}>Список дел</div>

		<button onClick={() => addItem(setRefreshToDos, refreshToDos)}>
			Добавить дело
		</button>
		<button onClick={() => deleteItem(selectedItem, setRefreshToDos, refreshToDos)}>
			Удалить дело
		</button>
		<button onClick={() => changeItem(selectedItem, setRefreshToDos, refreshToDos)}>
			Изменить дело
		</button>
		<button
			onClick={() =>
				sortAlphabetOrder(
					sortButtonStatus,
					setSortButtonStatus,
					toDos,
					setToDos,
					refreshToDos,
					setRefreshToDos,
				)
			}
		>
			Сортировать по алфавиту
		</button>
		<label>Поиск: </label>
		<input
			type="text"
			value={searchInput}
			onChange={({ target }) => setSearchInput(target.value)}
		/>
		{isLoading ? (
			<div className={styles.loader}></div>
		) : (
			<ol>
				{toDos.map(({ id, title }) => {
					return (
						<li
							className={
								selectedItem === id
									? styles.selectedToDoItem
									: styles.toDoItem
							}
							key={id}
							onClick={() => setSelectedItem(id)}
						>
							{title}
						</li>
					);
				})}
			</ol>
		)}
	</>
);
