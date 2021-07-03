
import { useState } from 'react'
import Label from './Label'


const Swatch = ({ hex_code }) => {
	const [swatch, setSwatch] = useState({
		backgroundColor: hex_code
	})

	const [label, setLabel] = useState(null)

	const onClick = () => {
		setSwatch({
			width: '100%',
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
