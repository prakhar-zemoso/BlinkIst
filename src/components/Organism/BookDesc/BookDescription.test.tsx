import { fireEvent, render, screen } from "@testing-library/react";
import {BookDesc as BookDescription} from "./BookDesc";
import { BrowserRouter } from "react-router-dom"

const MockBookDescription = () => {
  return (
      <BrowserRouter>
        <BookDescription/>
      </BrowserRouter>
  )
}


describe("Book View test", () => {
  test("Button Finished Reading", () => {
    render(<MockBookDescription />);
    const buttonElement = screen.getByRole("button", { name: /finished reading/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button Read Now", () => {
    render(<MockBookDescription />);
    const buttonElement = screen.getByRole("button", { name: /read now/i });
    expect(buttonElement).toBeInTheDocument();
  })

  
  test("Should update api on click", () => {
    render(<MockBookDescription />);
    const elementText = screen.getByRole("button", { name: /finished reading/i });
    fireEvent.click(elementText);
    expect(elementText).toBeInTheDocument();
  });
});