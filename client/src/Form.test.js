import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
// import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

import Form from './Form';

describe('<Form />', () => {
	// it('renders without crashing', () => {
	// 	render(<Form />);
	// });
	it('Renders the Username input value', () => {
		const { getByTestId } = render(<Form />);
		const username = getByTestId('username');
		expect(username.value).toBe('');
	});
	it('Renders the Password input value', () => {
		const { getByTestId } = render(<Form />);
		const password = getByTestId('password');
		expect(password.value).toBe('');
	});
	it('submitButton', () => {
		let clicked = false;
		const { getByText } = render(<Form handleSubmit={() => (clicked = true)} />);
		const submitButton = getByText(/submit!/i);
		fireEvent.click(submitButton);
		expect(clicked).toBe(true);
	});
	// it('Syncs input', async () => {
	// 	const { getByTestId } = render(<Form />);
	// 	const username = getByTestId('username');
	// 	expect(username.value).toBe('');
	// 	fireEvent.change(username, { target: { value: 'Test' } });
	// 	expect(username.value).toBe('Test');
	// });
});

// it('submitButton', () => {
//     let clicked = false;
//     const { getByText } = render(<Form onClick={() => (clicked = true)} />);
//     const submitButton = getByText(/submit!/i);
//     fireEvent.click(submitButton);
//     expect(clicked).toBe(true);
// });

// it('Renders the Username input', async () => {
// 	const { getByTestId } = render(<Form />);
// 	await waitForElement(() => getByTestId('username'));
// });

// it('calls "onClick" prop on button click', () => {
//     // Render new instance in every test to prevent leaking state
//     const onClick = jest.fn();
//     const { getByText } = render(<button onClick={onClick} />);

//     fireEvent.click(getByText(/submit!/i));
//     expect(onClick).toHaveBeenCalled();
// });

// it('calls "onClick" prop on button click', () => {
//     // Render new instance in every test to prevent leaking state
//     const onClick = jest.fn();
//     const { getByText } = render(<button onClick={onClick} />);

//     act(() => fireEvent.click(getByText(/submit!/i)));
//     expect(onClick).toHaveBeenCalled();
// });
