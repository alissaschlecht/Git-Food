import React from 'react';
import styles from './header.module.scss';

import Button from '../Button/Button';
import Text from '../Text/Text';


const Header = () => {
	return (
		<div>
			<nav className={styles.header}>
				<p>GitFood</p>
				<Text.Heading level={5} color="lightGrey">
					Hello I'm a heading
				</Text.Heading>
				<Button text="Log Out" />
				
			</nav>
		</div>	
	)
}

export default Header;