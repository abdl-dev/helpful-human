import storage from 'local-storage'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Sidebar from './Sidebar'
import View  from './View'

const Content = () => {

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


	const onClickClear = (e) => {
		// to be implemented after bbq
	}

	const onClickRandom = (e) => {
		// to be implemented
	}

	const onClickGroup = (e) => {
		// to be implemented
	}

	return (
		<div className="row content">
			<Sidebar onClickRandom={ onClickRandom }
					 onClickGroup={ onClickGroup }/>
			<View swatches={ swatches }
			   setSwatches={ setSwatches }
					labels={ labels }
				 setLabels={ setLabels }
					navRow={ navRow }
				 setNavRow={ setNavRow }
				   onClick={ onClickDetail }/>
		</div>
	)
}

export default Content
