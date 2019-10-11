import React, { Component } from 'react';
import styles from './addDish.module.scss';
import { Link } from "react-router-dom";
import Input from '../../components/Input/input';
import Text from '../../components/Text/Text';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button/Button';

const axios = require('axios');

class AddDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dishId: 1,
      ingredient: '',
      instruction: '',
      dishes: []
    } 
    this.updateNameField = this.updateNameField.bind(this);
    this.updateIngredientField = this.updateIngredientField.bind(this);
    this.updateInstructionField = this.updateInstructionField.bind(this);
  }

  updateNameField = (field, value, error) => {
    this.setState({ name: value });
  }

  updateIngredientField = (field, value, error) => {
    this.setState({ ingredient: value });
  }
  updateInstructionField = (field, value, error) => {
    this.setState({ instruction: value });
  }

  addDish = () => {
    axios.post('https://git-food-api.herokuapp.com/api/dishes', {
        name: this.state.name
    })
    .then((response) => {
      this.setState({ dishId: response.data.dish.id });
      this.setState({ dishes: this.state.dishes.concat([response.data.dish]) })
    })
    .then((response) => {
      axios.post('https://git-food-api.herokuapp.com/api/versions', {
        'version': {
          'dishId': this.state.dishId,
          'notes': '',
          'versionNumber': 1
        }
      })
    })
    .then((response) => {
      axios.post('https://git-food-api.herokuapp.com/api/ingredients', {
        'ingredient': {
          'versionID': 1,
          'name': 'tomato',
          'quantity': '3',
          'measurement': 'kilo'
        }
      });
      axios.post('https://git-food-api.herokuapp.com/api/instructions', {
        'instruction': {
          'versionID': 1,
          'stepNumber': 1,
          'description': 'do this'
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateDish = async () => {
    axios.put('https://git-food-api.herokuapp.com/api/dishes/5', {
      name: this.state.name
    })
    .then(function (response) {
      
    })
    .catch(function (error) {
      
    });
  }

  deleteDish = async () => {
    axios.delete('https://git-food-api.herokuapp.com/api/dishes/4')
    .then(function (response) {
      
    })
    .catch(function (error) {
      
    });
  }

  render(){
    console.log('this.state', this.state);
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
          label="Add Dish name"
          value={this.state.name}
          onInputChange={(value, error) => {
            this.updateNameField('Dishname', value, error);
          }}
        />
<br/>
<hr/>
<br/>
        <Input
          id="ingredientName" 
          label="Add ingredient name"
          value={this.state.ingredient}
          onInputChange={(value, error) => {
            this.updateIngredientField('Ingredientname', value, error);
          }}
        />
<br/>
<hr/>
<br/>
        <Input
          id="instruction" 
          label="Add instruction"
          value={this.state.instruction}
          onInputChange={(value, error) => {
            this.updateInstructionField('Instruction', value, error);
          }}
        />

        <Button 
          text="Save my dishname"
          onClick={ this.addDish } 
        />
{/*          <Button 
          text="Update my dishname"
          onClick={ this.updateDish} 
        />*/}
  <br/>
  <br/>
      <Button 
        text="Delete id=4 dish" 
        onClick={ this.deleteDish} 
      />
      </Wrapper>
    )
  }
}



export default AddDish;
