import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { QRCode } from 'react-qrcode-logo';
import { SelectField } from './components/SelectField';
import { ImageUploadField } from './components/ImageUploadField';
import { CheckboxField } from './components/CheckboxField';

const initialState = {

}

const App: React.FC = () => {
	const [state, setState] = useState(initialState);

	const handleChange = ({ target }: any) => {
		setState(prevState => ({ ...prevState, [target.name]: target.value }))
	}

	return (
		<div className='app'>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ width: 500, height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<QRCode {...state} />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<InputField
						name='value'
						type='text'
						handleChange={handleChange}
					/>
					<SelectField
						name='ecLevel'
						options={['L', 'M', 'Q', 'H']}
						handleChange={handleChange}
					/>
					<CheckboxField
						name='enableCORS'
						handleChange={handleChange}
					/>
					<InputField
						name='size'
						type='range'
						handleChange={handleChange}
						min={100}
						max={300}
					/>
					<InputField
						name='quietZone'
						type='range'
						handleChange={handleChange}
						min={20}
						max={80}
					/>
					<InputField
						name='bgColor'
						type='color'
						handleChange={handleChange}
					/>
					<InputField
						name='fgColor'
						type='color'
						handleChange={handleChange}
					/>
					<ImageUploadField
						name='logoImage'
						handleChange={handleChange}
					/>
					<InputField
						name='logoWidth'
						type='range'
						handleChange={handleChange}
						min={10}
						max={50}
					/>
					<InputField
						name='logoHeight'
						type='range'
						handleChange={handleChange}
						min={10}
						max={50}
					/>
					<InputField
						name='logoOpacity'
						type='range'
						handleChange={handleChange}
						min={0}
						max={1}
						step={0.1}
					/>
                    <SelectField
						name='qrStyle'
						options={['squares', 'dots']}
						handleChange={handleChange}
					/>
				</div>
			</div>
			<p>{JSON.stringify(state)}</p>
		</div>
	);
}

export default App;
