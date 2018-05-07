import { NEW_CARD, DELETE_CARD } from '../actions/types.js';

const initialState = {
  categories: [
    {name: 'Backlog', cards: ['test1', 'test2', 'test3', 'test4']},
    {name: 'In Progress', cards: ['test1', 'test2']},
    {name: 'Review', cards: ['test1', 'test2']},
    {name: 'Complete', cards: ['test1', 'test2']},
  ],
  newCard: '',
}

export default function(state = initialState, action) {
  switch(action.type) {
    // case NEW_CARD:
    //   console.log('New Card Dispatched');
    //   return {
    //     ...state,
    //     categories: action.newCard
    //   }
    case DELETE_CARD:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}
