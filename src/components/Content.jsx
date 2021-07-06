import storage from 'local-storage'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Sidebar from './Sidebar'
import View  from './View'
import Button  from './Button'

const Content = () => {


	let colors = storage.get('colorList')

	let currPageNum = 0;
	let pageSize = 12;
	let numPages = Math.ceil(colors.length / pageSize);
	const [swatches, setSwatches] = useState(colors.slice(0,pageSize).map((item) => ({
		backgroundColor: item.backgroundColor,
		width: '220px'
	})))

	const selectPage = ({selected}) => {
		currPageNum = selected
		setSwatches(colors.slice(pageSize * currPageNum,
								 pageSize * (currPageNum + 1)));
	}

	const [labels, setLabels] = useState(swatches.map((item) => ({
		text: item.backgroundColor,
		style: {
			fontSize: '1.5rem',
			lineHeight: '50px',
			marginTop: '207px',
			padding: '0rem 1.5rem'
		}

	})))

	const paginate = (
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

	const [navRow, setNavRow] = useState(paginate)

	const onClickDetail = (e) => {

		let newSwatches = []
		newSwatches.push({
			backgroundColor: e.target.id,
			width: '100%',
			height: '650px',
			borderColor: 'black'
		})
		let restSwatches = swatches.filter(item => item.backgroundColor !== e.target.id)

		restSwatches.forEach(item => newSwatches.push({
			backgroundColor: item.backgroundColor,
			width: '176px',
			height: '176px'
		}))

		setSwatches(newSwatches.slice(0,6))

		let newLabels = []

		let detailLabel = [{
			text: e.target.id,
			style: {
				fontSize: '4rem',
				lineHeight: '150px',
				height: '150px',
				marginTop: '498px',
				padding: '0rem 4.5rem'
			}
		}]

		newLabels.push(detailLabel[0])

		let restLabels = labels.filter(item => item.text !== e.target.id)

		restLabels.forEach(label => newLabels.push({
			text: label.text,
			style: {
				lineHeight: '65px',
				height: '65px',
				marginTop: '110px',
				padding: '0rem 1.0rem'
			}
		}))

		setLabels(newLabels)

		setNavRow(
			<Button key="btnClear"
			  className="clear_btn"
			  valueName="Clear"
			    onClick={ onClickClear } />

		)
	}


	const onClickClear = (e) => {
		let newSwatches = []
		let page = colors.slice(pageSize * currPageNum,
							pageSize * (currPageNum + 1))
		newSwatches = page.map((item) => ({
			backgroundColor: item.backgroundColor,
			width: '220px',
			height: '258px'
		}))

		let newLabels = []
		labels.forEach(item => newLabels.push({
			text: item.text,
			style: {
				fontSize: '1.5rem',
				lineHeight: '50px',
				height: '50px',
				width: '100%',
				marginTop: '207px'
		}}))

		setSwatches(newSwatches)
		setLabels(newLabels)
		setNavRow(paginate)
	}

	const onClickRandom = (e) => {
		let x = Math.floor(Math.random() * pageSize)
		let randomSwatch = {
			target: {
				id: swatches[x].backgroundColor
			}
		}
		onClickDetail(randomSwatch)
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
