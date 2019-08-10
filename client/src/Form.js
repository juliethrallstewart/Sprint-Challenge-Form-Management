import React, { useState, useEffect } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import Users from './Users';

const Form = (props) => {

    console.log(props)
    const { errors, touched, values, handleSubmit, status } = props;
    
	const [
		users,
		setUsers
    ] = useState([]);
    
    // useEffect(
	// 	() => {
	// 		status &&
	// 			setUsers([
	// 				...users,
	// 				status
	// 			]);
	// 	},
	// 	[
	// 		status
	// 	]
	// );

    useEffect(
        () => {
            const getUsers = () => {
                axios.get('http://localhost:5000/api/restricted/users')
                .then(res => {
                    setUsers(res.data)
                })
                .then(status &&
                    setUsers([
                        ...users,
                        status
                    ]))
                .catch(e => {
                    console.log('Server error', e)
                })
            };
            getUsers();
        }, [status]
    );

	console.log('this is the status', status);
    console.log('this is the users list', users);

	return (
        <>
        <div className="panel">
		<div className="user-form">
			<FormikForm>
                <div>
				<Field type="text" name="username" data-testid="username" placeholder="Name" />
				{touched.username && errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
				<Field type="text" name="password" data-testid="password" placeholder="Password" />
				{touched.email && errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
				<button onClick={handleSubmit} type="submit">Submit!</button>
                </div>
			</FormikForm>
		</div>
        </div>
        <div className="panel">
            <h1>User List</h1>
        <Users users={users} />
        </div>
        </>
	);
};



const FormikUserForm = withFormik({
	mapPropsToValues ({ username, password }) {
		return {
			username     : username || '',
			password : password || ''
		};
	},

	validationSchema : Yup.object().shape({
		username     : Yup.string().required('You cannot pass!!!'),
		password : Yup.string().min(6, 'Password has to be longer than 6 characters').required('Cannot pass'),		
	}),

	handleSubmit (values, { setStatus }) {
        console.log('Submit button clicked!')
		axios
			.post('http://localhost:5000/api/register', values)
			.then((res) => {
				setStatus(res.data);
			})
			.catch((err) => console.log(err.response));
	}
})(Form);

export default FormikUserForm;

