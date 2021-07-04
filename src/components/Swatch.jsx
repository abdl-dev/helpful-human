
import { useState } from 'react'
import Label from './Label'


const Swatch = ({ swatch, swatches, setSwatches, labels, setLabels, navRow, setNavRow}) => {

	const onClickDetail = (e) => {
		let newSwatches = []
		newSwatches.push({
			backgroundColor: e.target.id,
			width: '100%',
			height: '650px',
			borderColor: 'black'
		})
		swatches.forEach(swatch => newSwatches.push({
			backgroundColor: swatch.backgroundColor,
			width: '176px',
			height: '176px'
		}))

		setSwatches(newSwatches.slice(0,6))




		setLabels({
			style: {
				lineHeight: '65px',
				height: '65px',
				marginTop: '110px',
				padding: '0rem 1.0rem'
			}
		})

		const onClickClear = (e) => {
			// to be implemented after bbq
		}

		setNavRow(
			<input type="button" className="clear_btn" value="Clear" onClick={ onClickClear }/>
		)
		// setLabels({
		// 	fontSize: '4rem',
		// 	lineHeight: '150px',
		// 	height: '150px',
		// 	marginTop: '498px',
		// 	padding: '0rem 4.5rem'
		// })
	}
	return (
		<div
		key={ swatch.backgroundColor }
		id={ swatch.backgroundColor }
		className="swatch"
		style={ swatch }
		onClick={ onClickDetail }>
			<Label text={ swatch.backgroundColor } label={ labels }/>
		</div>
	)
}

export default Swatch
