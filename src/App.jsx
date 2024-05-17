import { useState } from "react";

function App() {
  const initialState = [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해 봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해 봅시다.",
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력하세요");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  // 삭제, 완료 버튼
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 하나의 컴포넌트
  return (
    <>
      <div className="layout">
        <p className="title">my todo list</p>
        <form onSubmit={addTodo} className="form">
          제목{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          내용
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">추가하기</button>
        </form>

        <p className="todo-title1">Working</p>
        <ul>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
                <button onClick={() => toggleTodo(todo.id)}>완료</button>
              </div>
            ))}
        </ul>

        <p className="todo-title2">Done</p>
        <ul>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
                <button onClick={() => toggleTodo(todo.id)}>취소</button>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
