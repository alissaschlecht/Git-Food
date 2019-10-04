import React from 'react';
import { Link } from "react-router-dom";
import styles from './dishes.module.scss';
import logoImage from '../../images/GitFoodLogo.png';
import Image from '../../components/Image';
import Button from '../../components/Button/Button';
import Heading from '../../components/Text/Heading';
import Body from '../../components/Text/Body';


const Dishes = () => {
	return (
		<div>
			<div className={styles['dashboard-heading']}>
				<Heading level={5} color="lightGrey">
					Firstname's Dishes
				</Heading>
				<Button text="Add a dish"/>
			</div>
			<div className={styles['empty-dishes']}>
				<Body size="large">Looks Like it's empty!</Body>
				<Image src={logoImage} alt="Git Food Logo" />
				<Link to="/dishForm" className={styles.button}>Add your first dish</Link>
				<Link to="/dish" className={styles.button}>View this dish</Link>
				{/* <Button text="Add your first dish" className={styles.button} /> */}
			</div>
		</div>
	)
}

export default Dishes;
