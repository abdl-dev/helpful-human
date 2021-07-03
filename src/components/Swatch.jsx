const Swatch = ({hex_code}) => {
	return (
		<div style={{ backgroundColor: hex_code }} className="swatch">
			<label htmlFor="swatch">{hex_code}</label>
		</div>
	)
}

export default Swatch
