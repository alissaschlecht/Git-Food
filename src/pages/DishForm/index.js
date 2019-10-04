import React from 'react';
import styles from './dishForm.module.scss';


const DishForm = ({ children, className }) => {
    return (
        <div className={`${styles.dish} ${className}`}>
            I'm gonna be a form!!
        </div>
    )
}

export default DishForm;
