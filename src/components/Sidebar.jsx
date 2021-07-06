import Button  from './Button'

const Sidebar = () => {
	let groupList = ['Red','Orange','Yellow','Green','Blue','Purple','Brown','Gray']

	return (
		<div className="col-3 sidebar">
			<input type="button" className="random_btn" value="Random Color" />
			{groupList.map((groupName) => (
				<Button key={ groupName } className="group_btn" valueName={ groupName } />
			))}
		</div>
	)
}

export default Sidebar
