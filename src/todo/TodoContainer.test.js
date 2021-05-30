import { render, screen } from '@testing-library/react';
import TodoContainer from './TodoContainer';

beforeEach(() => render(<TodoContainer />));

test('Displays the title', () => {
    const todoContainer = screen.getByText(/TODO/i);
    expect(todoContainer).toBeInTheDocument();
})