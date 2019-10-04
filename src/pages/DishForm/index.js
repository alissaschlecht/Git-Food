import React from 'react';
import styles from './dishForm.module.scss';
import { Link } from "react-router-dom";


const DishForm = ({ children, className }) => {
    return (
        <div className={`${styles.dish} ${className}`}>
            I'm gonna be a form!!
            <Link to="/" className={styles.button}>View all dishes</Link>
        </div>
    )
}

export default DishForm;
