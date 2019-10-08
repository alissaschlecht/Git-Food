import React, { Component } from 'react';
import styles from './dishForm.module.scss';
import { Link } from "react-router-dom";
import Input from '../../components/Input/input';
import Text from '../../components/Text/Text';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button/Button';

class DishForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    } 
    this.updateField = this.updateField.bind(this);
  }

  updateField = (field, value, error) => {
    this.setState({ name: value });
  }


  render(){
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
          value={this.state.name}
          onInputChange={(value, error) => {
            this.updateField('Dishname', value, error);
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
}



export default DishForm;
