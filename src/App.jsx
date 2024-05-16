import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해 봅시다.",
      isDone: false,
    },
  ];
  const [todo, setTodo] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (!title || !content) {
      alert("제목과 내용을 입력하세요");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트
    const newtodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    setTodo([...todo, newtodo]);
    // 이름 나이 초기화
    setTitle("");
    setContent("");
  };

  const removeTodo = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    setTodo(
      todo.filter(function (todo) {
        return todo.id !== id;
      })
    );
  };

  // 완료 버튼 활성화
  const completeTodo = (id) => {
    setTodo(
      todo.filter(function (todo) {
        return todo.id === id;
      })
    );
  };

  const logtodo = () => {};
  return (
    <>
      <p>my todo list</p>
      <form onSubmit={addTodo}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
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
        <p>Working</p>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 todo 리스트를 렌더링하세요.  */}
        {todo.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <p>{todo.content}</p>
            <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
            <button onClick={() => completeTodo(todo.id)}>완료</button>
          </div>
        ))}
      </ul>
      <p>Done</p>
      {/* 완료된 라벨이 들어와야 함 */}
      {todo.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <p>{todo.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
