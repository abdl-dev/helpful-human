import Label from './Label'

const Swatch = ({ swatch, swatches, setSwatches, labels, setLabels, navRow, setNavRow, onClick}) => {
	return (
		<div
		id={ swatch.backgroundColor }
		className="swatch"
		style={ swatch }
		onClick={ onClick }>
			<Label key={ 'label' + swatch.backgroundColor } text={ swatch.backgroundColor } label={ labels }/>
		</div>
	)
}

export default Swatch
