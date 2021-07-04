
import { useState } from 'react'
import Label from './Label'


const Swatch = ({ swatchState, view, setView }) => {
	const [label, setLabel] = useState({
		hexCode: swatchState.backgroundColor
	})

	const onClick = (e) => {
		let newView = []
		newView.push({
			backgroundColor: e.target.id,
			width: '100%',
			height: '650px',
			borderColor: 'black'
		})
		view.forEach(swatch => newView.push({
			backgroundColor: swatch.backgroundColor,
			width: '176px',
			height: '176px'
		}))

		setView(newView.slice(0,6))
		setLabel({
			lineHeight: '65px',
			height: '65px',
			marginTop: '110px',
			padding: '0rem 1.0rem'
		})
		// setLabel({
		// 	fontSize: '4rem',
		// 	lineHeight: '150px',
		// 	height: '150px',
		// 	marginTop: '498px',
		// 	padding: '0rem 4.5rem'
		// })
	}
	return (
		<div
		key={ swatchState.backgroundColor }
		id={ swatchState.backgroundColor }
		className="swatch"
		style={ swatchState }
		onClick={ onClick }>
			<Label labelState={ label } hexCode={ swatchState.backgroundColor }/>
		</div>
	)
}

export default Swatch
