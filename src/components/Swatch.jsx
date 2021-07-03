import { useState } from 'react'

const Swatch = ({hex_code}) => {
	const onClick = (info) => {
		console.log(info);
	}
	return (
		<div className="col-3">
			<div style={{ backgroundColor: hex_code }} className="swatch" onClick={onClick}>
				<label htmlFor="swatch">{hex_code}</label>
			</div>
		</div>
	)
}

export default Swatch
