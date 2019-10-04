import React from 'react';
import styles from './dish.module.scss';


const Dish = ({ children, className }) => {
    return (
        <div className={`${styles.dish} ${className}`}>
            hey, i'm the dish page
        </div>
    )
}

export default Dish;
