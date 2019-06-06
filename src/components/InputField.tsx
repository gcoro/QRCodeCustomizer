import * as React from 'react';

interface IInputFieldProps {
	name: string;
	type: 'color' | 'range' | 'text';
	min?: number;
	max?: number;
	step?: number;
	handleChange: (target: any) => void;
}

export const InputField = ({ name, type, handleChange, min, max, step }: IInputFieldProps) => {
	return (
		<>
			<label>{name}</label>
			<input
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				min={min}
				max={max}
				step={step || 1}
			/>
		</>
	);
}