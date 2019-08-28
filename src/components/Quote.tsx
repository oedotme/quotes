import React from 'react'

const Quote = ({ quote, author }) => {
	return (
		<>
			<h1>{quote}</h1>
			<p>{author}</p>
		</>
	)
}

export default Quote
