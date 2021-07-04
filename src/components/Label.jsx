import { useState } from 'react'

const Label = ({ hexCode, labelState }) => {
	return (
		<label
		key={ hexCode + 'label'}
		htmlFor={ hexCode }
		style={ labelState }>{ hexCode }</label>
	)
}

export default Label
