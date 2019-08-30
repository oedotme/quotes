import React, { useEffect, useState } from 'react'

import ThemeIcon from '../../assets/icons/brightness.svg'
import LogoIcon from '../../assets/icons/logo.svg'

import styles from './styles.css'

const computed_styles = getComputedStyle(document.documentElement)

const Nav = () => {
	const [toggle, set_toggle] = useState(false)

	const toggle_theme = () => set_toggle(!toggle)

	useEffect(() => {
		const current_color = computed_styles.getPropertyValue('--color-primary')

		if (current_color !== '#38408a') {
			document.documentElement.style.setProperty('--color-primary', '#38408a')
			document.documentElement.style.setProperty('--text-color', '#e5e5e5')
		} else {
			document.documentElement.style.setProperty('--color-primary', '#e8e8e8')
			document.documentElement.style.setProperty('--text-color', '#38408a')
		}
	}, [toggle])

	return (
		<nav className={styles.nav}>
			<img className={styles.logo} src={LogoIcon} alt="logo" />

			<img
				className={styles.brightness}
				onClick={toggle_theme}
				src={ThemeIcon}
				alt="theme toggle"
			/>
		</nav>
	)
}

export default Nav
