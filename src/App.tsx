import { Route, Routes } from 'react-router-dom'
import { DetailJob } from './pages/DetailJob/DetailJob'
import { Home } from './pages/Home/Home'

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/job/:jobId' element={<DetailJob />} />
			</Routes>
		</div>
	)
}

export { App }
