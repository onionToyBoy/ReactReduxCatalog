import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './RegistrationForm.module.css';
import { setFormStatus, setAuthorizationStatus } from '../actions';
import { Input } from './Input';
import { useInput } from '../../../hooks';

export const RegistrationForm = () => {
	const name = useInput('', { isEmpty: true });
	const email = useInput('', { isEmpty: true, isEmail: true });
	const password = useInput('', { isEmpty: true, minLength: 6 });

	const dispatch = useDispatch();

	const closeForm = (id) => {
		if (id) {
			dispatch(setFormStatus(false));
		}
	};

	const onSubmit = () => {
		dispatch(setAuthorizationStatus(true));
		dispatch(setFormStatus(false));
	};

	const checkValid = () => {
		return !email.inputValid || !password.inputValid || !name.inputValid;
	};

	return (
		<div
			id='background'
			className={styles.container}
			onClick={(e) => closeForm(e.target.id)}
		>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.cross} id='cross'>
					x
				</div>
				<div className={styles.title}>Registration form:</div>
				<Input
					text='Name'
					emptyError={name.isDirty && name.isEmpty}
					value={name.value}
					onChange={(e) => name.onChange(e)}
					onBlur={(e) => name.onBlur(e)}
				/>
				<Input text='Date of birth (optional)' type='date' />
				<Input
					text='Email'
					value={email.value}
					onChange={(e) => email.onChange(e)}
					onBlur={(e) => email.onBlur(e)}
					emptyError={email.isDirty && email.isEmpty}
					emailError={email.isDirty && email.isEmailError}
				/>
				<Input
					text='Password'
					type='password'
					value={password.value}
					onChange={(e) => password.onChange(e)}
					onBlur={(e) => password.onBlur(e)}
					emptyError={password.isDirty && password.isEmpty}
					minLengthError={password.isDirty && password.minLengthError}
				/>
				<div className={styles.buttonBlock}>
					<input
						type='submit'
						name='submit'
						value='Submit'
						className={
							checkValid() ? styles.button : styles.button + ' ' + styles.active
						}
						disabled={checkValid()}
					/>
				</div>
			</form>
		</div>
	);
};
