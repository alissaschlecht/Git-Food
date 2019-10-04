import React from 'react';
import styles from './dishForm.module.scss';
import { Link } from "react-router-dom";
import Input from '../../components/Input/input';
import Text from '../../components/Text/Text';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button/Button';

const DishForm = ({ children, className }) => {
    return (
        <Wrapper>
            <Link to="/" className={styles.button}>View all dishes</Link>
            <Text.Heading 
                level={2} 
                color="lightGrey">
                Add new dish
            </Text.Heading>
            <Text.Heading 
                level={3} 
                color="lightGrey">
                Dish Name
            </Text.Heading>
            <Text.Heading 
                level={4} 
                color="lightGrey">
                Ingredients
            </Text.Heading>
            I'm gonna be a form!
            <Input />
            <Text.Heading 
                level={4} 
                color="lightGrey">
                Instructions
            </Text.Heading>
            I'm gonna be a form!
            <Input />
            <Button text="Save my dish" />
        </Wrapper>
    )
}

export default DishForm;
