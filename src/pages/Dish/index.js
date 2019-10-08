import React from 'react';
import styles from './dish.module.scss';

import Text from '../../components/Text/Text';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button/Button';

import { Link } from "react-router-dom";

const Dish = ({ children, className }) => {
	return (
		<div className={`${styles.dish} ${className}`}>
			<Link to="/" className={styles.button}>View all dishes</Link>
			<Text.Heading 
				level={1} 
				color="lightGrey">
				Gaspacho
			</Text.Heading>
			<Text.Heading 
				level={4} 
				color="lightGrey">
				Version: 3
			</Text.Heading>
			<Text.Heading 
				level={5} 
				color="lightGrey">
				Ingredients
			</Text.Heading>
			<Text.Body 
				size="large">
				Lorem ipsum yum yum
			</Text.Body>
			<Text.Heading 
				level={5} 
				color="lightGrey">
				Instructions
			</Text.Heading>
			<Text.Body 
				size="large">
				1. Lorem ipsum yum yum
			</Text.Body>
			<Text.Heading 
				level={5} 
				color="lightGrey">
				Notes
			</Text.Heading>
			<Text.Body 
				size="large">
				Eat this everyday
			</Text.Body>
			
			<Link to="/dishForm" className={styles.button}>Edit this dish</Link>
		</div>
	)
}

export default Dish;
