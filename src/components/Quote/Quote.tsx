import React from 'react'

import QuotesIcon from '../../assets/icons/quotes.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'

import styles from './styles.css'

const Quote = ({ quote, author, onClick }) => {
	return (
		<main className={styles.quote} id="quote-box">
			<div className={styles.quote__content}>
				<h1 className={styles.quote__text} id="text">
					{quote}
				</h1>
				<div className={styles.quote__more}>
					<p className={styles.quote__author} id="author">
						- {author}
					</p>
					<a
						className={styles.quote__tweet}
						id="tweet-quote"
						href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}`}
						target="_blank"
					>
						<img src={TwitterIcon} alt="share with twitter" />
					</a>
				</div>
			</div>

			<button className={styles.quote__new} id="new-quote" onClick={onClick}>
				<img
					className={styles.quote__new__icon}
					src={QuotesIcon}
					alt="new quote"
				/>
			</button>
		</main>
	)
}

export default Quote
