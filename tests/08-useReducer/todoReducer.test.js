import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('todoReducer tests',()=>{
    const initialState = [{
        id: 1,
        description: 'To do',
        done: false
    }];

    test('Must return initial state', ()=>{
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Must add todo to state', ()=>{
        const action = {
            type: '[TODO] Add new todo',
            payload: {
                id: 2,
                description: 'Other todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Must delete todo', ()=>{
        const action = {
            type: '[TODO] Delete todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });
    test('Must toggle todo', ()=>{
        const action = {
            type: '[TODO] Set todo completed',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        const { done } = newState[0];
        expect(done).toBe(!initialState[0].done);
    })

})