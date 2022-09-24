const initialState = [{
    id: 1,
    todo: 'Study reducers',
    done: false
}];

const todoReducer = (state=initialState, action={}) => {
    if(action.type==='[TODO] Add new todo'){
        return [...state, action.payload];
    }

    return state;
}


let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Implement reducer',
    done: false
}

const addTodoAction = {
    type: '[TODO] Add new todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);