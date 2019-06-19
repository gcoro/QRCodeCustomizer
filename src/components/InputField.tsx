import * as React from 'react';

interface IInputFieldProps {
	name: string;
	type: 'color' | 'range' | 'text';
	min?: number;
	max?: number;
	step?: number;
	defaultValue?: string;
	handleChange: (target: any) => void;
}

export const InputField = ({ name, type, handleChange, min, max, step, defaultValue }: IInputFieldProps) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}>
			<label>{name}</label>
			<input
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				min={min}
				max={max}
				step={step || 1}
				defaultValue={defaultValue}
			/>
		</div>
	);
}