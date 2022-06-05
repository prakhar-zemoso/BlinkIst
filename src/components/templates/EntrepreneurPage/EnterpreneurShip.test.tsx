import { Footer } from "../../Organism/FooterBar/FooterNav";
import { HeaderComponent } from "../../Organism/Header/Header";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Entrepreneurship } from "./EntrepreneurShip";
import { SearchBarComponent } from "../../molecules/SearchBar/SearchBar";
import  Banner  from "../../molecules/Banner/Banner";
import Categories from "../../Organism/BookCategories/BookCategories";
import Library from "../../../data/Lib";
import Sizes from "../../Organism/SearchBarFunction/SeachBarFunction";

describe("Entrepreneurship Page", () => {
  test("Existence test", () => {
    render(
      <MemoryRouter>
        <Entrepreneurship
          banner={<Banner />}
          sizes={<Sizes setTitle />}
          trendingBlinks={<Categories data={Library} ftitle='' status="trending" />}
          justAddedBlinks={<Categories data={Library} ftitle='' status="justAdded" />}
          featuredBlinks={<Categories data={Library}  ftitle='' status="featured" />}
        />
      </MemoryRouter>
    );
  });
});