import storage from 'local-storage'
import './App.css';
import Header  from './components/Header'
import Content from './components/Content'

function App() {

	if (storage.get('colorList') === null) {
		let colors = [];

		for (let i = 0; i < 120; i++) {
			let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
			colors.push({ backgroundColor: color});
		}

		storage.set('colorList', colors)
	}

	return (
		<div className="container-fluid h-100">
			<Header/>
			<Content/>
		</div>
	);
}

export default App;
