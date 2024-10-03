import React from "react";
import Header from '@/app/TodoPage/Header';
import TodoSummary from '@/app/TodoPage/TodoSummary';
import AddTodo from '@/app/TodoPage/AddTodo';
import TodoList from '@/app/TodoPage/TodoList';
export default function TodoPage() {
    const [todos, setTodos] = React.useState([]);
    const completedTodos = todos.filter(
        (todo) => todo.is_completed === true
    ).length;

    return (
        <div className="wrapper">
            <Header />
            <TodoSummary todos_completed={completedTodos} total_todos={todos.length} />
            <AddTodo setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}