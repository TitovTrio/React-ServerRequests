import styles from './ToDoList.module.css';

export const ToDoListLayout = ({ toDos }) => (
	<>
		<div className={styles.toDoListTitle}>Список дел:</div>
		<ol>
			{toDos.map(({ id, title }) => {
				return (
					<li className={styles.toDoListContainer} key={id}>
						{title}
					</li>
				);
			})}
		</ol>
	</>
);
