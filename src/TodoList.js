import React from "react";
import Todo from "./Todo"
const TodoList = ({todos,setTodos,filteredTodos}) => {
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) =>(
                        <Todo
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo} 
                        text={todo.text} 
                        key = {todo.id} 
                        filteredTodos={filteredTodos}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList ;