const Swatch = ({hex_code}) => {
	return (
		<div className="col-3">
			<div style={{ backgroundColor: hex_code }} className="swatch">
				<label htmlFor="swatch">{hex_code}</label>
			</div>
		</div>
	)
}

export default Swatch
