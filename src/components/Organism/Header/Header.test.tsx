import {HeaderComponent} from './Header'
import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'


let TestHeader = () => {
    return (
        <BrowserRouter>
            <HeaderComponent />
        </BrowserRouter>
    )
}

describe("Header test", () => {
    test("Existence test", () => {
        render(<TestHeader />)

        const logos = screen.getAllByAltText("Logo")
        let element = logos[2]

        fireEvent.click(element)
        let extendedNavTest = screen.getByText("Politics")
        expect(extendedNavTest).toBeInTheDocument()
    })


const MockHeader = () => (
  <BrowserRouter>
      <HeaderComponent />
  </BrowserRouter>
);

describe("Header tests before login", () => {
  test("should login", async () => {
    render(<MockHeader />);

    expect(window.location.pathname).toEqual("/");

    const myLibrary = screen.queryByText(/My Library/i);
    expect(myLibrary).not.toBeNull();

    const explore = screen.queryByText(/Explore/i);
    expect(explore).not.toBeNull();
  });
});
})

