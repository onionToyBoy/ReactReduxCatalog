import { useState, useEffect } from 'react';
import { EMAIL_VALIDATION } from '../constants/constants';

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);

	const valid = useValidation(value, validations);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onBlur = (e) => {
		setDirty(true);
	};

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	};
};
const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true);
	const [isEmailError, setEmailError] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;

				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true);
					break;

				case 'isEmail':
					const re = EMAIL_VALIDATION;
					re.test(String(value).toLowerCase())
						? setEmailError(false)
						: setEmailError(true);
					break;

				default:
					return null;
			}
		}
	}, [value, validations]);

	useEffect(() => {
		if (isEmpty || isEmailError || minLengthError) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}
	}, [isEmpty, isEmailError, minLengthError]);

	return {
		isEmpty,
		minLengthError,
		isEmailError,
		inputValid,
	};
};
