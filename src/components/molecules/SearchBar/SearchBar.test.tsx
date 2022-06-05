import {render, screen} from '@testing-library/react'
import { SearchBarComponent } from './SearchBar'

describe("Search bar test", () => {
    test("Search bar", () => {
        render(<SearchBarComponent />)
        const element = screen.getByPlaceholderText("Search by title or author")
        expect(element).toBeInTheDocument()
    })
})
