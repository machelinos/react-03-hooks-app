import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('<TodoItem /> tests',()=>{
    const todo = {
        id: 1,
        description: 'To do',
        done: false
    };

    const onDeleteItemMock = jest.fn();
    const onSetCompletedMock = jest.fn();


    test('Should render list item with todo', ()=>{
        render(
            <TodoItem
                todo={todo}
                onDeleteItem={onDeleteItemMock}
                onSetCompleted={onSetCompletedMock}
            />
        );

        expect(screen.getByRole('listitem').className).toBe('list-group-item d-flex justify-content-between');

        const spanEl = screen.getByLabelText('span');
        expect(spanEl.className).toBe('align-self-center');
        expect(spanEl.className).not.toContain('text-decoration-line-through');
    });

    test('todo must be marked as completed if its done', ()=>{
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteItem={onDeleteItemMock}
                onSetCompleted={onSetCompletedMock}
            />
        );
        
        const spanEl = screen.getByLabelText('span');
        expect(spanEl.className).toContain('text-decoration-line-through');

    });

    test('Must execute onSetCompleted function when click on span', ()=>{
        render(
            <TodoItem
                todo={todo}
                onDeleteItem={onDeleteItemMock}
                onSetCompleted={onSetCompletedMock}
            />
        );
        
        const spanEl = screen.getByLabelText('span');
        fireEvent.click(spanEl);
        expect(onSetCompletedMock).toHaveBeenCalledWith(todo.id);
    });

    test('Must execute onDeleteItem when delete button is clicked', ()=>{
        render(
            <TodoItem
                todo={todo}
                onDeleteItem={onDeleteItemMock}
                onSetCompleted={onSetCompletedMock}
            />
        );

        const deleteBtn = screen.getByRole('button',{name: 'Delete'});
        fireEvent.click(deleteBtn);
        expect(onDeleteItemMock).toHaveBeenCalledWith(todo.id);

    });

});