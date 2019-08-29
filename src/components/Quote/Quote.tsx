import React from 'react'

import QuotesIcon from '../../assets/icons/quotes.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'

import styles from './styles.css'

const Quote = ({ quote, author }) => {
	return (
		<main className={styles.quote}>
			<div className={styles.quote__content}>
				<h1 className={styles.quote__text}>{quote}</h1>
				<div className={styles.quote__more}>
					<p className={styles.quote__author}> - {author}</p>
					<a
						className={styles.quote__tweet}
						href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}`}
						target="_blank"
					>
						<img src={TwitterIcon} alt="share with twitter" />
					</a>
				</div>
			</div>

			<button
				className={styles.quote__new}
				onClick={() => console.log(':: Clicked ::')}
			>
				<img src={QuotesIcon} alt="new quote" />
			</button>
		</main>
	)
}

export default Quote
