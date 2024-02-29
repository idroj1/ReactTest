import { render, screen } from "@testing-library/react";
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from "react-router-dom";

describe('Pruebas del router en el <MainApp />', () => {

  test('debe de mostrar el HomePage ', () => {

    render(
    <MemoryRouter>
        <MainApp/>
    </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getByText('HomePage:')).toBeTruthy();

  });

  test('debe de mostrar el LoginPage ', () => {

    render(
    <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
    </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getByText('LoginPage')).toBeTruthy();

  });

  test('debe de mostrar el AboutPage ', () => {

    render(
    <MemoryRouter initialEntries={['/about']}>
        <MainApp/>
    </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getByText('AboutPage')).toBeTruthy();

  });
  
});
