import React, { Component } from 'react'
import FoodListItem from '../01/FoodListItem';

class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>FoodList</h2>
        <ul>
            {this.props.foods.map(food => <FoodListItem 
                                        key={food.no} 
                                        name={food.name} 
                                        count={food.count} /> )}
        </ul>
      </div>
    )
  }
}

export default FoodList