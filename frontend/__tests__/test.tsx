import { render, screen } from '@testing-library/react';

import Home from '@/pages';

it('first_test', () => {
  render(<Home />);
  expect(screen.getByText('Learn')).toBeInTheDocument();
});
