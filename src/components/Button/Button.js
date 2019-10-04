import React from "react";
import styles from './button.module.scss';

const Button = ({text, className}) => {
	return (
		<button className={ `${styles.button } ${className}`}>{text}</button>
    )
}

export default Button;