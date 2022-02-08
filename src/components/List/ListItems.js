import React, { useState, useContext } from 'react'
import { Context } from '../Context/Context'
import Card from '../UI/Card'
import ListDate from './ListDate'
import './ListItems.css'
import { useEffect } from 'react'
function ListItems(props) {
	const { data, setData } = useContext(Context)
	let cls = 'li'

	if (props.completed) {
		cls += ' checked'
	}
	const setCheckHandler = () => {
		setData(
			data.map((el) => {
				if (el.id === props.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}
	// const delHandler = () => {
	// 	removeTodo(props.id)
	// }
	const delHandler = () => {
		setData(
			data.filter((el) => {
				return el.id !== props.id
			}),
		)
	}

	return (
		<Card className='block'>
			<li className={cls} key={props.id}>
				<input
					onChange={setCheckHandler}
					type='checkbox'
					checked={props.completed}
				/>
				{props.title}
			</li>
			<button onClick={delHandler}>delete</button>

			<ListDate date={props.date} />
		</Card>
	)
}

export default ListItems
