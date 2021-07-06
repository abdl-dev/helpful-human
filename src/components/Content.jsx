import Sidebar from './Sidebar'
import View  from './View'

const Content = ({swatches, setSwatches, labels, setLabels, navRow, setNavRow, onClickRandom, onClickGroup, onClickDetail}) => {

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
