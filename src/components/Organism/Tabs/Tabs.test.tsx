import {screen, render,fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {Tabs} from './Tabs'

let TestTabs = () => {
    return (
        <MemoryRouter>
            <Tabs />
        </MemoryRouter>
    )
}

describe("Tabs test", () => {
    test("Is finished test", () => {
        render(<TestTabs />)

        let isFinished = screen.getAllByText("Finished")
        expect(isFinished[0]).toBeInTheDocument()
    })
})
describe("Lab tab test", () => {
    test("should toggle between the tabs", () => {
      render(<Tabs />);
      const tabs = screen.getAllByRole("tab");
  
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      expect(tabs[1]).toHaveAttribute("aria-selected", "false");
  
      fireEvent.click(tabs[1]);
      expect(tabs[0]).toHaveAttribute("aria-selected", "false");
      expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    });

})