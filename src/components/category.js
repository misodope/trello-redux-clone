import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardActions.js';
import Card from './card.js';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCard: null,
    }
  }
  render() {
    const category = this.props.categories.map((category, i) => (
      <div key={i} className='categoryWrapper'>
        <h3>{category.name}</h3>
        {
          category.cards.map((card, j) => (
            <Card card={card} key={j} category={category} index1={i} index2={j}/>
          ))
        }
        {
          this.state.addCard === i
          ?
          <div>
            <textarea className="cardBody" rows="3"></textarea>
            <br />
            <button type='button' className="addButton">Add</button>
            <button type='button' className="cancelButton" onClick={ () => this.setState({ addCard: null }) }>Cancel</button>
          </div>
          :
          <button type='button' className="addCard" onClick={ () => this.setState({ addCard: i }) }>Add a card...</button>
        }
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
export default connect(mapStateToProps, {deleteCard})(Category);
