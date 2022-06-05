import { BookDesc } from "../../Organism/BookDesc/BookDesc"
import { Footer } from "../../Organism/FooterBar/FooterNav";
import { HeaderComponent } from "../../Organism/Header/Header";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BookDetails } from "./BookDetails";

describe("Book Details Template Test", () => {
  test("Should exist", () => {
    render(
      <MemoryRouter>
        <BookDetails
          header={<HeaderComponent />}
          body={<BookDesc />}
          footer={<Footer />}
        />
      </MemoryRouter>
    );
  });
});