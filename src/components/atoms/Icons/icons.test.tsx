import {render, screen} from '@testing-library/react'
import {Icons} from './Icon'
import BlinkistLogo from '../../../images/logo.svg'

describe("Display logo", () => {
    test("Should display logo", () => {
        render(<Icons src={BlinkistLogo} />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })
})