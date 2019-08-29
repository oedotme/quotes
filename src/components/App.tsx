import React, { useCallback, useState } from 'react'

import Nav from './Nav/Nav'
import Quote from './Quote/Quote'

import QUOTES from '../data/quotes.json'
import styles from './styles.css'

const App = () => {
	const { length } = QUOTES.quotes

	const [index, set_index] = useState(Math.floor(Math.random() * length))
	const current = QUOTES.quotes[index]

	const handleClick = useCallback(() => {
		set_index(Math.floor(Math.random() * length))
	}, [])

	return (
		<section className={styles.app}>
			<Nav />
			<Quote
				quote={current.quote}
				author={current.author}
				onClick={handleClick}
			/>
		</section>
	)
}

export default App
