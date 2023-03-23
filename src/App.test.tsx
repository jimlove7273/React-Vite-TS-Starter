/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { App, AppRoutes } from './App';

describe('App', () => {
  it('Renders hello', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello Vite');
  });

  it('Renders Not Found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/NotFound']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
