import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Counts from './counts';

test('Display zero initial counts', () => {
    render(<Counts />);
    const result = screen.getByText(/Clicked times: 0/i);
    expect(result).toBeInTheDocument();
});

test('Display new counter after one click', () => {
    render(<Counts />);
    
    const button = screen.getByText(/Click/i, {selector: 'button'});

    fireEvent.click(button);
    //fireEvent metodo para manipular eventos
    const result = screen.getByText(/Clicked times: 1/i);
    expect(result).toBeInTheDocument();
}); 