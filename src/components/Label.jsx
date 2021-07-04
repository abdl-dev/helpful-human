import { useState } from 'react'

const Label = ({ text, label }) => {
	return (
		<label
		key={ 'label' + text }
		htmlFor={ text }
		style={ label.style }>{ text }</label>
	)
}

export default Label
