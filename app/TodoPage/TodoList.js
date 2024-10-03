import TodoItem from '@/app/TodoPage/TodoItem';

export default function TodoList({ todos, setTodos }) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item, index) => <TodoItem key={index} item={item} setTodos={setTodos} />)
            ) : (
                <p>Se ve un poco vacío. ¿No necesitas anotar tareas?</p>
            )}
        </ol>
    );
}