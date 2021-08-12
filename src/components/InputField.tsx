import * as React from 'react';

interface IInputFieldProps {
	name: string;
	type: 'color' | 'range' | 'text';
	min?: number;
	max?: number;
	step?: number;
	defaultValue?: string | number;
	handleChange: (target: any) => void;
	hideLabel?: boolean;
	value?: string | number;
}

export const InputField = ({ name, type, handleChange, min, max, step, defaultValue, hideLabel, value }: IInputFieldProps) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}>
			{!hideLabel && <label>{name}</label>}
			<input
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				min={min}
				max={max}
				step={step || 1}
				defaultValue={defaultValue}
				value={value}
			/>
		</div>
	);
}