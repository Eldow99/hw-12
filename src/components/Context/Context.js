import React, { useState, useEffect } from 'react'

export const Context = React.createContext()

export const ContextProvider = (props) => {
	const [data, setData] = useState(() => {
		const saved = localStorage.getItem('data')
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})

	useEffect(() => {
		//Здесь мы изпользуем useEffect для того чтобы при изменениеек состояния даблялялист данные состояния в localstorage
		localStorage.setItem('data', JSON.stringify(data))
	}, [data])

	return (
		<Context.Provider value={{ setData, data }}>
			{props.children}
		</Context.Provider>
	)
}

export default Context
