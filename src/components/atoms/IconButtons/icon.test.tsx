import {screen, render} from '@testing-library/react';
import IconButton from '.';
import {ReactComponent as SearchIcon} from "../../../images/search.svg";
import { ReactComponent as Down_arrow } from "../../../images/down_arrow.svg";

describe("IconButton Test",()=>{
    test("Checking for search Icon",()=>{
        render(<IconButton children={<SearchIcon/>}/>)
        const iconBtn = screen.getByRole("button")
        expect(iconBtn).toBeInTheDocument()
    })

    test("Checking for dropdown icon", () => {
        render(<IconButton children={<Down_arrow />} />)
        const iconBtn = screen.getByRole("button")
        expect(iconBtn).toBeInTheDocument()
    })


})
