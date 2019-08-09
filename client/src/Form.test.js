import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/react/cleanup-after-each';

import Form from './Form';

describe('<Form />', () => {
	it('renders without crashing', () => {
		render(<Form />);
	});
	it('Renders the Username input', () => {
		const { getByTestId } = render(<Form />);
		const username = getByTestId('username');
		expect(username).toBeVisible();
	});
	it('Syncs input', () => {
		const { getByTestId } = render(<Form />);
		const username = getByTestId('username');
		expect(username.value).toBe('');
		fireEvent.change(username, { target: { value: 'Test' } });
		expect(username.value).toBe('Test');
	});
});

// it('submitButton', () => {
//     let clicked = false;
//     const { getByText } = render(<Form onClick={() => (clicked = true)} />);
//     const submitButton = getByText(/submit!/i);
//     fireEvent.click(submitButton);
//     expect(clicked).toBe(true);
// });
