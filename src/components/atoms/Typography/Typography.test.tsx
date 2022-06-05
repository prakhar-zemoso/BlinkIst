
  
import {fireEvent, render , screen} from '@testing-library/react';
import Typography from './Typography';

describe('Typo',()=>{
    test("Typo Text",()=>{
        render(<Typography />);
        expect(screen.getByText('Dummy Typo')).toBeInTheDocument();
    })


})

test("should render Typography", () => {
    const onClick = jest.fn();
    render(<Typography variant="h1" children="Heading"  width="10px" onClick={onClick}/>);
    const typography = screen.getByTestId(/typography/i);
    fireEvent.click(typography)
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  
 