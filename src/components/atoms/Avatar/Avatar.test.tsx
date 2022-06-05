import { render, screen } from '@testing-library/react';
import {AvatarIcon} from './Avatar';

it('Unit Test - Avatar', () => {
  render(<AvatarIcon letter="A" />);
  const name = screen.getByTestId('Avatar');
  expect(name.textContent).toBe('A');
});