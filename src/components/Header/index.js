import React from 'react';
import styles from './header.module.scss';

import Button from '../Button/Button';
import Text from '../Text/Text';


const Header = () => {
	return (
		<div>
			<nav className={styles.header}>
				<p>GitFood</p>
				<Button text="Log Out" />
			</nav>
		</div>	
	)
}

export default Header;