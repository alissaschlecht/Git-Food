import React from 'react';
import styles from './dishForm.module.scss';
import { Link } from "react-router-dom";
import Input from '../../components/Input/input';

const DishForm = ({ children, className }) => {
    return (
        <div className={`${styles.dish} ${className}`}>
            I'm gonna be a form!!
            <Input />
            <Link to="/" className={styles.button}>View all dishes</Link>
        </div>
    )
}

export default DishForm;
