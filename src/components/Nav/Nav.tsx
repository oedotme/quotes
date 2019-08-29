import React from 'react'

import ThemeIcon from '../../assets/icons/brightness.svg'

import styles from './styles.css'

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<span className={styles.logo__letter}>q</span>
				<span className={styles.logo__letter}>u</span>
				<span className={styles.logo__letter}>o</span>
				<span className={styles.logo__letter}>t</span>
				<span className={styles.logo__letter}>e</span>
				<span className={styles.logo__letter}>s</span>
			</div>

			<img className={styles.brightness} src={ThemeIcon} alt="theme toggle" />
		</nav>
	)
}

export default Nav
