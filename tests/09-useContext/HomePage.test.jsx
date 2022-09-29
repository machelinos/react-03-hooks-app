import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';
describe('<HomePage /> tests', ()=>{
    test('Must render componet without user', ()=>{
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBeFalsy();
    });

    test('Must render componet with user', ()=>{

        const user = {
            id: 1,
            name: 'Joy',
            email: 'yoy@gmail.com'
        }
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user));
    });
});