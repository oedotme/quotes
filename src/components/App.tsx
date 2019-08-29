import React from 'react'

import Nav from './Nav/Nav'
import Quote from './Quote/Quote'

import QUOTES from '../data/quotes.json'
import styles from './styles.css'

const App = () => {
	const [first] = QUOTES.quotes

	return (
		<section className={styles.app}>
			<Nav />
			<Quote quote={first.quote} author={first.author} />
		</section>
	)
}

export default App
