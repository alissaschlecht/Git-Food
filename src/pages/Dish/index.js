import React from 'react';
import styles from './dish.module.scss';

import { Link } from "react-router-dom";

const Dish = ({ children, className }) => {
    return (
        <div className={`${styles.dish} ${className}`}>
            hey, i'm the dish page
            <Link to="/" className={styles.button}>View all dishes</Link>
            <Link to="/dishForm" className={styles.button}>Edit this dish</Link>
        </div>
    )
}

export default Dish;
