import {render, screen} from '@testing-library/react'
import {BasicTabs} from './SelectedTabs'

describe("Tabs Test", () => {
    test("", () => {
        render(<BasicTabs />)
        const element = screen.getByText('Content Reading')
        expect(element).toBeInTheDocument()
    })
})