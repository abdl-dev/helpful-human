import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Swatch from './Swatch'

const Viewer = () => {
	const [viewer, setViewer] = useState(null)

	let random_hex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	let elements = [];
	let pageSize = 12;

	for (let i = 0; i < 120; i++) {
		let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
		elements.push(<Swatch key={ color } hex_code={ color }/>)
	}

	let numPages = Math.ceil(elements.length / pageSize);

	let currPageNum = 0;
	let currPage = elements.slice(pageSize * currPageNum, pageSize * (currPageNum + 1));

	return (
		<>
		<div className="col-9 viewer">
			<div className="col-12 page">
				{ currPage }>
			</div>
			<div className="col-12 paginate">
				<ReactPaginate>
					previousLabel={ 'Previous' }
					nextLabel={ 'Next' }
					pageCount={ numPages }
				</ReactPaginate>
			</div>
		</div>
		</>
	)
}

export default Viewer
