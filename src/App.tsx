import React, { useState } from 'react';
import { InputField } from './components/InputField';
import { QRCode } from 'react-qrcode-logo';
import { SelectField } from './components/SelectField';
import { ImageUploadField } from './components/ImageUploadField';
import { CheckboxField } from './components/CheckboxField';
import ReactJson from 'react-json-view';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
	const [state, setState] = useState({});

	const handleChange = ({ target }: any) => {
		setState(prevState => ({ ...prevState, [target.name]: target.value }))
	}

	const handleDownload = () => {
		// const canvas = document.querySelector('#react-qrcode-logo');
		// ^ fixme - doing like above, quietZone does not appear in the downloaded image

		html2canvas(document.querySelector('#react-qrcode-logo') as any)
			.then(function (canvas) {
				const link = document.createElement('a');
				link.download = 'filename.png';
				link.href = canvas.toDataURL();
				link.click();
			});
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
			<button type='button' onClick={handleDownload}
				style={{ margin: '20px' }}>Download QR Code</button>
			<div style={{ marginLeft: '15px' }}>
				<ReactJson src={state} style={{ marginBottom: 40 }} />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					style={{ fontSize: 12 }}
				>
					Learn React
				</a>
			</div>

		</div>
	);
}

export default App;
