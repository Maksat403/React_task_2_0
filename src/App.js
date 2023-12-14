import React from "react";
import LoginForm from "./components/LoginForm";
import Task1 from "./components/tasks/Task1";
import Task2 from "./components/tasks/Task2";

//? Import - это ключевое слово, исп в JS (React) для включения функциональности или кода из другого файла (модуля) в текущий файл. Это позволяет исп перменные, функции, классв и др элементы из других модулей в текущем коде.

const handleSubmit = (data) => {
  console.log("Submited data:", data);
};

const App = () => {
  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} />
      <Task1 />
      <Task2 />
    </div>
  );
};
//? Export - это ключевое слово, которое позволяет указать какие переменные, функции или классы должны быть доступны для использования из других файлов.
export default App;
