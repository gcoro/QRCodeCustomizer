import * as React from 'react';

interface ISelectFieldProps {
	name: string;
	options: string[];
	handleChange: (target: any) => void;
}

export const SelectField = ({ name, options, handleChange }: ISelectFieldProps) => {
	return (
		<>
			<label>{name}</label>
			<select name={name} onChange={handleChange}>
				{options.map((option: string, index: number) => (
					<option key={index} value={option}>{option}</option>
				))}
			</select>
		</>
	);
}

