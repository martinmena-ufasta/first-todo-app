export default function TodoSummary({ todos_completed, total_todos }) {
    return (
        <section className="todohero_section">
            <div>
                <p className="text_large">Tareas completadas</p>
                <p className="text_small">Sigue así</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}