import React from 'react'

import Quote from './components/Quote'

import QUOTES from './data/quotes.json'

const App = () => {
	const [first] = QUOTES.quotes

	return (
		<>
			<Quote quote={first.quote} author={first.author} />
		</>
	)
}

export default App
