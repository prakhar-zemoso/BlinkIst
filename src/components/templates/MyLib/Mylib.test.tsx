import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MyLibrary } from "./MyLib";
import { Tabs } from "../../Organism/Tabs/Tabs"
import {HeaderComponent} from '../../Organism/Header/Header'
import {Footer} from '../../Organism/FooterBar/FooterNav'

describe("My Library Test", () => {
    test("Existence test", () => {
        <MyLibrary
        body={<Tabs />}
        ></MyLibrary>
    })
})