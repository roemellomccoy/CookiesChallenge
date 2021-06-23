import { render, screen } from '@testing-library/react';
import CookieContainer from './CookieContainer';

beforeEach(() => render(<CookieContainer />));

test('Displays the title', () => {
    const cookieContainer = screen.getByText(/Cookie/i);
    expect(cookieContainer).toBeInTheDocument();
})