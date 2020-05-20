import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			let formIsValid = true;
			for (const inputId in state.inputs) {
				if (!state.inputs[inputId]) {
					continue;
				}
				/*CHECK IF INPUTS ARE VALID */
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				/* RETURN NEW OBJECT TO UPDATE INITIAL STATE*/
				...state,
				inputs: {
					/* CURRENT INPUT STATE*/
					...state.inputs,
					/* OVERWRITE INPUT STATE FROM actionId*/
					[action.inputId]: { value: action.value, isValid: action.isValid },
				},
				isValid: formIsValid,
			};
		case 'SET_DATA':
			return {
				inputs: action.inputs,
				isValid: action.formIsValid,
			};
		default:
			/* RETURN UNCHANGED STATE*/
			return state;
	}
};

export const useForm = (initialInputs, initialFormValidity) => {
	const [formState, dispatch] = useReducer(formReducer, {
		/*INITIAL STATE*/
		inputs: initialInputs,
		isValid: initialFormValidity,
	});

	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({
			type: 'INPUT_CHANGE',
			value: value,
			isValid: isValid,
			inputId: id,
		});
	}, []);

	const setFormData = useCallback((inputData, formValidity) => {
		dispatch({
			type: 'SET_DATA',
			inputs: inputData,
			formIsValid: formValidity,
		});
	}, []);

	return [formState, inputHandler, setFormData];
};

export default useForm;
