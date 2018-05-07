import React, { Component } from 'react';

const Card = (props) => (
  <div className='card'>
      <h4>{props.card}<i class="fas fa-trash-alt" /></h4>
  </div>
);

export default Card;
