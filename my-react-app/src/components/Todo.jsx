/* eslint-disable react/prop-types */
// const Todo = ({task, isDone}) => {
//     if (isDone){
//         return <h3>Finished: {task}</h3>
//     }
//     else{
//         return <h3>Work on: {task}</h3>
//     }
// };

// export default Todo;

// const Todo = ({task, isDone}) => {
//     return <h3>{isDone ? 'Finished': 'Work On'} : {task}</h3>
// };

// export default Todo;

// const Todo = ({task, isDone}) => {
//     return <h3>{isDone && 'Finished'} : {task}</h3>
// };

// export default Todo;

const Todo = ({task, isDone}) => {
    return <h3>{isDone || 'Do it'} : {task}</h3>
};

export default Todo;