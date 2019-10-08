import React, { Component } from 'react';
import styles from './dishForm.module.scss';
import { Link } from "react-router-dom";
import Input from '../../components/Input/input';
import Text from '../../components/Text/Text';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button/Button';

const axios = require('axios');

class DishForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dishes: []
    } 
    this.updateField = this.updateField.bind(this);
  }

  updateField = (field, value, error) => {
    this.setState({ name: value });
  }

  componentDidMount() {
    fetch('https://git-food-api.herokuapp.com/api/dishes')
      .then(response => response.json())
      .then(json => this.setState({dishes: json.dishes}));
  }

  addDish = async () => {
    axios.post('https://git-food-api.herokuapp.com/api/dishes', {
      name: this.state.name
    })
    .then(function (response) {
      console.log(response);
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteDish = async () => {
    axios.delete('https://git-food-api.herokuapp.com/api/dishes/4')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render(){
    console.log(this.state.dishes);
    console.log(this.state);
    return (
      <Wrapper>
        <Link to="/" className={styles.button}>View all dishes</Link>
        <p>All Dishes:</p>
        <ul>
          {this.state.dishes.map((dish, key) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>
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
            this.updateField('Dishname', value, error);
          }}
        />
        <Button 
          text="Save my dishname"
          onClick={ this.addDish} 
        />
 <br/>
 <br/>
        <Input
          id="dishName" 
          label="Update id=5 Dish name"
          value={this.state.name}
          onInputChange={(value, error) => {
            this.updateField('Dishname', value, error);
          }}
        />
          <Button 
          text="Update my dishname"
          onClick={ this.updateDish} 
        />
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



export default DishForm;
