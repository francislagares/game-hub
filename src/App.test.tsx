import { render } from '@testing-library/react';
import { describe } from 'vitest';

import Home from './pages/Home';

describe('App', () => {
  test('renders without crashing', async () => {
    const { container } = render(<Home />);

    expect(container).toBeInTheDocument();

    // screen.debug();
  });
});
