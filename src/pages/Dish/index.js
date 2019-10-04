import React from 'react';
import styles from './dish.module.scss';


const Dish = ({ children, className }) => {
    return (
        <div className={`${styles.dish} ${className}`}>{children}</div>
    )
}

export default Dish;
