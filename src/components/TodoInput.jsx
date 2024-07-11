import { useState } from "react";

function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value; // event로 부터 입력받는 value값
    setInputText(value);
  };

  // Input 초기화는 여기서 해야되므로 중간함수 handleClick 추가
  const handleClick = () => {
    onTodoAdd(inputText);
    // inputText를 받아서 onTodoAdd 함수를 props로 받아서 실행
    setInputText("");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
