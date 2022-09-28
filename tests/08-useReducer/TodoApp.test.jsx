import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos');

describe('<TodoApp /> tests', ()=>{


    test('Component must render correctly',()=>{
        useTodos.mockReturnValue({
            todos: [
                {
                    id: 1,
                    description: 'Todo #1',
                    done: false
                },
                {
                    id: 2,
                    description: 'Todo #2',
                    done: true
                }
            
            ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleNewTodo: jest.fn(),
            handleDeleteTodo: jest.fn(),
            handleSetCompleted: jest.fn()
        });
        
        render(<TodoApp />);
        
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();

    });
});