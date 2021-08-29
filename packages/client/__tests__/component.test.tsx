import { BasicButton } from '../component/BasicButton';
import { render } from '@testing-library/react';

describe('BasicButton', () => {
  test('render', () => {
    const { getByRole } = render(<BasicButton />);

    expect(getByRole('button').textContent).toBe('Button')
  });
});
