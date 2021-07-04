
import { useState } from 'react'
import Label from './Label'


const Swatch = ({ swatchState, view, setView }) => {
	const [swatch, setSwatch] = useState(swatchState);
	const [label, setLabel] = useState(null)

	const onClick = (e) => {
		console.log(e)
		setSwatch({
			width: '100%',
			height: '650px',
			backgroundColor: e.target.id,
			borderColor: 'black'
		})
		setLabel({
			fontSize: '4rem',
			lineHeight: '150px',
			height: '150px',
			marginTop: '498px',
			padding: '0rem 4.5rem'
		})
		setView(view.filter(item => item.backgroundColor == e.target.id))
	}
	return (
		<div
		key={ swatchState.backgroundColor }
		id={ swatchState.backgroundColor }
		className="swatch"
		style={ swatch }
		onClick={ onClick }>
			<Label labelState={ label } hexCode={ swatchState.backgroundColor }/>
		</div>
	)
}

export default Swatch
