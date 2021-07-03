import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Swatch from './Swatch'

const Viewer = () => {
	let elements = [];
	let pageSize = 12;

	for (let i = 0; i < 120; i++) {
		let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
		elements.push(<Swatch key={ color } hex_code={ color }/>)
	}

	const [viewer, setViewer] = useState(elements.slice(0, pageSize));

	let numPages = Math.ceil(elements.length / pageSize);

	const selectPage = ({selected}) => {
		setViewer(elements.slice(pageSize * selected,
								 pageSize * (selected + 1)));
	}

	return (
		<div className="col-9 viewer">
			<div className="col-12 page">
				{ viewer }
			</div>
			<div className="col-12">
				<ReactPaginate
					previousLabel={ 'Previous' }
					nextLabel={ 'Next' }
					pageCount={ 8 }
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

export default Viewer
