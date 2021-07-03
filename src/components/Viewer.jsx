import Swatch from './Swatch'

const Viewer = () => {
	return (
		<div className="col-9 view">
			<Swatch hex_code="red" />
			<Swatch hex_code="blue" />
			<Swatch hex_code="green" />
			<Swatch hex_code="yellow" />
			<Swatch hex_code="orange" />
			<Swatch hex_code="green" />
		</div>
	)
}

export default Viewer
