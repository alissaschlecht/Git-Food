import React from 'react';
import styles from './footer.module.scss';

import Text from '../Text/Text';


const Footer = () => {
	return (
		<div className={styles.footer}>
			<Text.Body color="lightGrey">
					Made with good taste
			</Text.Body>
		</div>	
	)
}

export default Footer;