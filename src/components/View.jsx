import Swatch from './Swatch'

const View = ({ swatches, setSwatches, labels, setLabels, navRow, setNavRow, onClick}) => {
	return (
		<div className="col-9 view">
			<div className="col-12 page">
				{swatches.map((swatch) => (
					<Swatch key={ "swatch" + swatch.backgroundColor + swatch.width }
						 swatch={ swatch }
			 		   swatches={ swatches }
					setSwatches={ setSwatches }
						 labels={ labels }
					  setLabels={ setLabels }
						 navRow={ navRow }
					  setNavRow={ setNavRow }
						onClick={ onClick }/>
				))}
			</div>
			<div className="col-12 navrow">
				{ navRow }
			</div>
		</div>
	)
}

export default View
