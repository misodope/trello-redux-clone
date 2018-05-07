import { NEW_CARD, DELETE_CARD, NEW_CATEGORY } from './types.js';

export const deleteCard = (categories, categoryIndex, cardIndex) => dispatch => {
  let updatedCards = {name: categories[categoryIndex].name, cards:categories[categoryIndex].cards.slice(0, cardIndex).concat(categories[categoryIndex].cards.slice(cardIndex + 1))};
  let copy = categories.slice();
  copy[categoryIndex] = updatedCards
   dispatch({
     type: DELETE_CARD,
     payload: copy
   });
}
