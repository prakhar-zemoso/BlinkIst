
import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sizes from "../../Organism/SearchBarFunction/SeachBarFunction";

describe("Entrepreneurship Page", () => {
  test("Existence test", () => {
    render(
      <MemoryRouter>
       <Sizes setTitle = 'Books'/>
      </MemoryRouter>

      
    );
  });
});