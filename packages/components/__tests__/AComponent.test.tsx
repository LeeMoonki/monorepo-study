import { AComponent } from '../src/A';
import { render } from '@testing-library/react';

test('AComponent', () => {
  const { getByRole } = render(<AComponent />);

  expect(getByRole('heading').textContent).toBe('AComponent');
});
