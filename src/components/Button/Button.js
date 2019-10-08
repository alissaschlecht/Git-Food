import React from "react";
import styles from './button.module.scss';

const Button = ({text, className, onClick}) => {
	return (
		<button 
			className={ `${styles.button } ${className}`}
			onClick={onClick}
		>{text}</button>
    )
}

export default Button;