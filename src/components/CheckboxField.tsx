import * as React from 'react';

interface ICheckboxFieldProps {
	name: string;
	handleChange: (target: any) => void;
}

export const CheckboxField = ({ name, handleChange }: ICheckboxFieldProps) => {

	const handleCheckboxToggle = (e: any) => {
		const target = {
			name,
			value: e.target.checked
		}
		handleChange({ target });
	};

	return (
		<>
			<input
				type='checkbox'
				name={name}
				onChange={handleCheckboxToggle}
			/>
			<label htmlFor={name}>{name}</label>
		</>
	);
}