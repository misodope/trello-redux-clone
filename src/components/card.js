import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardActions.js';

const Card = (props) => (
  <div className='card'>
      <h4>{props.card}<span onClick={() => props.deleteCard(props.categories, props.index1, props.index2)}><i className="fas fa-trash-alt" /></span></h4>
  </div>
);

const mapStateToProps = state => ({
  categories: state.categories.categories
})

export default connect(mapStateToProps, { deleteCard })(Card);
