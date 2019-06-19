import React, { useState } from 'react';
import { InputField } from './components/InputField';
import { QRCode } from 'react-qrcode-logo';
import { SelectField } from './components/SelectField';
import { ImageUploadField } from './components/ImageUploadField';
import { CheckboxField } from './components/CheckboxField';
import ReactJson from 'react-json-view';

const App: React.FC = () => {
	const [state, setState] = useState({});

	const handleChange = ({ target }: any) => {
		setState(prevState => ({ ...prevState, [target.name]: target.value }))
	}

	return (
		<div className='app'>
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
					<div style={{ width: '240px', display: 'flex', flexDirection: 'column', padding: '15px' }}>
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
							max={250}
						/>
						<InputField
							name='quietZone'
							type='range'
							handleChange={handleChange}
							min={20}
							max={50}
						/>
						<div style={{ display: 'flex', flexDirection: 'row', marginTop: '4px', justifyContent: 'space-around' }}>
							<InputField
								name='bgColor'
								type='color'
								defaultValue='#ffffff'
								handleChange={handleChange}
							/>
							<InputField
								name='fgColor'
								type='color'
								defaultValue='#000000'
								handleChange={handleChange}
							/>
						</div>
					</div>
					<div style={{ width: '240px', display: 'flex', flexDirection: 'column', padding: '15px' }}>
						<ImageUploadField
							name='logoImage'
							handleChange={handleChange}
						/>
						<InputField
							name='logoWidth'
							type='range'
							handleChange={handleChange}
							min={20}
							max={250}
						/>
						<InputField
							name='logoHeight'
							type='range'
							handleChange={handleChange}
							min={20}
							max={250}
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
				<div style={{
					width: 400,
					height: 400,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					border: '1px solid #d4fafc',
					borderRadius: '50px',
					backgroundColor: '#d4fafc'
				}}>
					<QRCode {...state} />
				</div>
			</div>
			<ReactJson src={state} />
		</div>
	);
}

export default App;
