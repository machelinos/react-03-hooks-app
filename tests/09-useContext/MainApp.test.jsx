import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('<MainApp /> tests', ()=>{
    test('Must render HomePage component',()=>{
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeTruthy();
    });

    test('Must render LoginPage component', ()=>{
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();

    });
});