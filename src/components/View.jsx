import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Swatch from './Swatch'

const View = () => {
	const [labels, setLabels] = useState({
		id: 'placeholder'
	})

	let colors = [];

	for (let i = 0; i < 120; i++) {
		let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
		colors.push({ backgroundColor: color});
	}

	let pageSize = 12;
	let numPages = Math.ceil(colors.length / pageSize);
	const [swatches, setSwatches] = useState(colors.slice(0, pageSize));

	const selectPage = ({selected}) => {
		setSwatches(colors.slice(pageSize * selected,
								 pageSize * (selected + 1)));
	}
	return (
		<div className="col-9 view">
			<div className="col-12 page">
				{swatches.map((swatch) => (
					<Swatch swatch={ swatch }
			 			  swatches={ swatches }
					   setSwatches={ setSwatches }
					   		labels={ labels }
						 setLabels={ setLabels }/>
				))}
			</div>
			<div className="col-12">
				<ReactPaginate
					previousLabel={ 'Previous' }
					nextLabel={ 'Next' }
					pageCount={ numPages }
					onPageChange={ selectPage }
					containerClassName={ 'paginate' }
					previousLinkClassName={ 'paginatePrevious' }
					nextLinkClassName={ 'paginateNext' }
					activeClassName={ 'paginateActive'}
					disabledClassName={ 'paginateDisabled' }
					pageRangeDisplayed='10'
				/>
			</div>
		</div>
	)
}

export default View
