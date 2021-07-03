
import { useState } from 'react'
import Label from './Label'


const Swatch = ({ hex_code }) => {
	const [swatch, setSwatch] = useState({
		width: '225px',
		height: '265px',
		backgroundColor: hex_code

	})

	const [label, setLabel] = useState({
		fontSize: '1.5rem',
		lineHeight: '50px',
		height: '50px',
		marginTop: '214px'
	})

	const onClick = () => {
		setSwatch({
			width: '95%',
			height: '650px',
			backgroundColor: swatch.backgroundColor
		})
		setLabel({
			fontSize: '4rem',
			lineHeight: '150px',
			height: '150px',
			marginTop: '500px',
			padding: '0rem 4.5rem'
		})

	}

	return (
		<div
		key={ hex_code }
		id={ hex_code }
		className="swatch"
		style={ swatch }
		onClick={ onClick }>
			<Label state={ label } hex_code={ hex_code }/>
		</div>
	)
}

export default Swatch
