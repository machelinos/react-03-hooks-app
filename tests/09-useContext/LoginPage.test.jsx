import { render, fireEvent, screen } from "@testing-library/react";
import { useContext } from "react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('<LoginPage /> tests', ()=>{
    test('Must render the component without user', ()=>{
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBeFalsy();
    });

    test('Must execute setUser function',()=>{
        const user ={
            id: 1,
            name: 'Juan',
            email: 'juan@yo.com'
        }

        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{user, setUser}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUser).toHaveBeenCalledWith(user);
    });
})