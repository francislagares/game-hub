import { render } from '@testing-library/react';
import { describe } from 'vitest';

import Home from './pages/Home';

describe('App', () => {
  test('renders without crashing', () => {
    render(<Home />);

    // screen.debug();
  });
});
