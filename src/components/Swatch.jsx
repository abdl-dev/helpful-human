import Label from './Label'

const Swatch = ({ swatch, swatches, setSwatches, labels, setLabels, navRow, setNavRow, onClick}) => {
	let label = labels.filter(item => item.text === swatch.backgroundColor)[0

	return (
		<div
		id={ swatch.backgroundColor }
		className="swatch"
		style={ swatch }
		onClick={ onClick }>
			<Label key={ 'label' + label.text } label={ label }/>
		</div>
	)
}

export default Swatch
