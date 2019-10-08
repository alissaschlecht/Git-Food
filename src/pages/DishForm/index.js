import React from 'react';
import styles from './dishForm.module.scss';
import { Link } from "react-router-dom";
import Input from '../../components/Input/input';
import Text from '../../components/Text/Text';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button/Button';

const DishForm = () => {
  return (
    <Wrapper>
      <Link to="/" className={styles.button}>View all dishes</Link>
      <Text.Heading 
        level={2} 
        color="lightGrey">
        Add new dish
      </Text.Heading>
      <Input
        id="dishName" 
        label="Dish name"
        value="value"
        onInputChange={(value, error) => {
          updateField('Dishname', value, error);
        }}
      />

      <br/>
      <br/>
      <Button text="Save my dish" />
      <br/>
      <br/>
      <Button text="Delete this dish" />
    </Wrapper>
  )
}

function updateField(field, value, error) {
  console.log(field, value, error);
}

export default DishForm;
