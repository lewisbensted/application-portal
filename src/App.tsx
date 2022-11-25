import './App.css'
import Applications from './components/Applications/Applications'
import Header from './components/Header/Header'

function App() {
	document.title = 'Application Portal'
	return (
		<div className="App">
			<Header size={1}>Application Portal</Header>
			<Applications />
		</div>
	)
}

export default App
