import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// // localStorage의 밸류값들을 전부 찾아서 value에 넣은 배열을 반환
function fetchTodos() {
  // localStorage.getAllItems() 느낌으로 만든 함수
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i); // index값에 해당하는 key의 vaule 들고옴
    result.push(value);
  }
  return result;
}

// 컴포넌트
function App() {
  const [todos, setTodos] = useState(fetchTodos());
  // set~ 변수 : 업데이트에 사용하는 변수

  // 이 컴포넌트는 input 태그가 초기화가 되는지 안되는지만 상관해야 함
  const addTodo = (todo) => {
    console.log("clicked");
    localStorage.setItem(todo, todo); // localStorage에 키 - 밸류 쌍 값 저장
    // todos.push(inputText); - 원본 배열 조작하면 렌더링이 안됌
    setTodos((currentTodos) => {
      return [...currentTodos, todo]; // 기존 배열에서 inputText를 배열의 값에 추가해서 새로운 배열 반환
    });
    // setInputText(""); // 기존에 사용자가 쓴 input이 초기화됨
  };

  // 데이터를 직접 조작하는 함수는 데이터와 가장 가까운 컴포넌트에 놓자
  const removeTodo = (todo) => {
    //   console.log(todo, index);
    //   todos.splice(index, 1); // index번째 value부터 시작해서 1개의 배열을 삭제
    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      }
    }); // 배열 값 중 인자의 조건에 해당하는 값들을 빼고 반환
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      {/* addTodo가 실행됨 */}
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  );
}

export default App;
