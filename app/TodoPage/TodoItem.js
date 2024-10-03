export default function TodoItem({ item, setTodos }) {
    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                    ? { ...todo, is_completed: !todo.is_completed }
                    : todo
            )
        );
    };

    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    };

    return (
        <li id={item?.id} className="todo_item">
            <button className="todo_items_left" onClick={completeTodo}>
                <div className={"check-box " + (item.is_completed ? "filled" : "")}></div>
                <p>{item?.title}</p>
            </button>
            <div className="todo_items_right">
                <button onClick={handleDelete}>
                    <span>Eliminar</span>
                </button>
            </div>
        </li>
    );
}