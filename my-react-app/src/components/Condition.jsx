import Todo from "./Todo";

const Condition = () => {
    return (
        <div>
             <Todo task = "Learn React" isDone = {true}/>
      <Todo task = "Core Concepts" isDone = {false}/>
      <Todo task = "Try JSX" isDone = {true}/>
        </div>
    );
};

export default Condition;