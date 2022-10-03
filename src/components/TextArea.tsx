import * as React from 'react';

interface ITextAreaProps {
	name: string;
    rows?: number;
    cols?: number;
	role?: string;
	defaultValue?: string | number;
	handleChange: (target: any) => void;
	hideLabel?: boolean;
	value?: string | number;
}

export const TextArea = ({ name, handleChange, role, rows, cols, defaultValue, hideLabel, value }: ITextAreaProps) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px', whiteSpace:'pre-line' }}>
			{!hideLabel && <label>{name}</label>}
			<textarea
				id={name}
				name={name}
				onChange={handleChange}
                rows={rows}
                cols={cols}
                role={role}
				defaultValue={defaultValue}
				value={value}
			/>
		</div>
	);
}