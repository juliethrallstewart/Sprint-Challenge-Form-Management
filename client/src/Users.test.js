import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Users from './Users';

const users = [
	{
		id       : 1,
		username : 'Trevor',
		password : '$2a$12$6xQXMlZt/ik8v2u5soQ9f.ZxxUgOjOTyw1cko0yYjF1tnjzgugGHe'
	},
	{
		id       : 2,
		username : 'ash',
		password : '$2a$12$rjOmeDmJJnFO7m7sVl59Mu7jiri3cun4Lu4J6wLnn83kFMyVV3PRC'
	}
];

describe('<Users />', () => {
	it('renders without crashing', () => {
		render(<Users users={users} />);
	});
	it('props work', () => {
		const display = render(<Users users={users} />);
		display.getByText(/Trevor/, 'i');
		display.getByText(/ash/, 'i');
	});
});
