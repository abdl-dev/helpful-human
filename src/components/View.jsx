import storage from 'local-storage'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Swatch from './Swatch'

const View = () => {
	const [labels, setLabels] = useState({
		id: 'placeholder'
	})

	let colors = storage.get('colorList')

	let pageSize = 12;
	let numPages = Math.ceil(colors.length / pageSize);
	const [swatches, setSwatches] = useState(colors.slice(0, pageSize));

	const selectPage = ({selected}) => {
		setSwatches(colors.slice(pageSize * selected,
								 pageSize * (selected + 1)));
	}


	const [navRow, setNavRow] = useState(
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
			pageRangeDisplayed={ numPages }
		/>
	)

	return (
		<div className="col-9 view">
			<div className="col-12 page">
				{swatches.map((swatch) => (
					<Swatch swatch={ swatch }
			 			  swatches={ swatches }
					   setSwatches={ setSwatches }
					   		labels={ labels }
						 setLabels={ setLabels }
						 	navRow={ navRow }
						 setNavRow={ setNavRow }/>
				))}
			</div>
			<div className="col-12 navrow">
				{ navRow }
			</div>
		</div>
	)
}

export default View
