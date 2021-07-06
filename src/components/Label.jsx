const Label = ({ text, label }) => {
	return (
		<label
		htmlFor={ text }
		style={ label.style }>{ text }</label>
	)
}

export default Label
