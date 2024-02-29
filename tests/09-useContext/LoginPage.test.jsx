import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('pruebas en <LoginPage />', () => {
    
    test('debe de mostrar el componente sin el usuario ', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
              <LoginPage />
            </UserContext.Provider>  
         );

         const preTag = screen.getByLabelText('pre2');
         expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar el setUser al hacer click al boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
              <LoginPage />
            </UserContext.Provider>  
         );

         const button = screen.getByRole('button'); //Para solo un boton
        //  const button = screen.getAllByRole('button'); //Para mas de un boton
        fireEvent.click(button);

        // expect(setUserMock).toHaveBeenCalled(); //llamado sin especificar resultado

        expect(setUserMock).toHaveBeenCalledWith({
            "email": "juanlopez@gmail.com", 
            "id": 123, 
            "name": "Juan Lopez"
        }); //llamado con resultado especifico

    });
  
});
