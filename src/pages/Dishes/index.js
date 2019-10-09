import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './dishes.module.scss';
import logoImage from '../../images/GitFoodLogo.png';
import Image from '../../components/Image';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
const axios = require('axios');

class Dishes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: []
    } 
  }

	componentDidMount() {
    axios.get('https://git-food-api.herokuapp.com/api/dishes/')
      .then(response => this.setState({dishes: response.data.dishes}));
  }

  deleteDish = async (id) => {
    try {
			axios.delete('https://git-food-api.herokuapp.com/api/dishes/'+id);
			this.setState({dishes: this.state.dishes.filter(dish => dish.id !== id)});
		} catch (error) {
			console.log(error)
		}
  }

  render(){
		return (
			<div>
				<div className={styles['dashboard-heading']}>
					<Text.Heading 
						level={5} 
						color="lightGrey">
						Firstname's Dishes
					</Text.Heading>
					<Link to="/addDish" className={styles.button}>Add a dish</Link>
				</div>
				{this.state.dishes.length ?
	        <div className={styles['dish-list']}>
	          {this.state.dishes.map((dish, key) => (
	            <div key={dish.id} className={styles['dish-row']} >
	            	<p>{dish.name}</p>
	            	<div className={styles['versions']}>
	            		<p>version</p>
            		</div>
	            	<div className={styles['button-container']}>
									<Link 
										to={ `dish/${dish.id}`} 
										className={styles.button}
									>
										Edit
									</Link>
		            	<Button 
		            		text="delete" 
		            		className={styles.button} 
		            		onClick={() => this.deleteDish(dish.id)}
		            	/>
	            	</div>
	            </div>
	          ))}
	        </div>
       :
					<div className={styles['empty-dishes']}>
						<Text.Body 
							size="large">
							Looks Like it's empty!
						</Text.Body>
						<Image src={logoImage} alt="Git Food Logo" />
						<Link to="/addDish" className={styles.button}>Add your first dish</Link>
						<Link to="/dish" className={styles.button}>View this dish</Link>
						{/* <Button text="Add your first dish" className={styles.button} /> */}
					</div>
				}
			</div>
		)
	}
}

export default Dishes;
