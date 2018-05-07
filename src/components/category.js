import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './card.js';

class Category extends Component {
  render() {

    const category = this.props.categories.map((category, i) => (
      <div key={i} className='categoryWrapper'>
        <h3>{category.name}</h3>
        {
          category.cards.map((card, j) => (
            <Card card={card} key={j}/>
          ))
        }
        <button type='button' className="addCard">Add a card...</button>
      </div>
    ));
    return (
      category
    )
  }
}
const mapStateToProps = state => ({
  categories: state.categories.categories
})
export default connect(mapStateToProps, {})(Category);
