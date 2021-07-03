import { useState } from 'react'
import Swatch from './Swatch'

const Viewer = () => {
	const [viewer, setViewer] = useState(null)
	let elements = []

	for (let i = 0; i < 120; i++) {
		let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
		elements.push(<Swatch key={ color } hex_code={ color }/>)
	}

	let random_hex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

	return (
		<div className="col-9 viewer">
			{ elements }
		</div>
	)
}

export default Viewer
