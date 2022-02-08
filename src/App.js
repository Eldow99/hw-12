import { useState, useEffect, useContext } from 'react'
import './App.css'
import Input from './components/Input/Input'
import List from './components/List/List'
import { Context } from './components/Context/Context'

function App() {
	const ctxData = useContext(Context)

	return (
		<>
			<div className='App'>
				<Input />
				<List data={ctxData.data} />
			</div>
		</>
	)
}

export default App
