import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {isBaby: undefined, babies: [], 
  sitters: [
    {
      _id: '1',
      firstname: 'Abdullah', 
    lastname: 'null', 
    age: 25, 
    yearsOfExperience: 4, 
    region: 'Copenhagen', 
    picture: 'no picture', 
    gender: 'MALE', phone: '12456789', ratings: []}
  ]}

export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
    case UsersActions.ADD_RATING:
      // action.payload: {id, rating}
      let sitters = [...state.sitters];
      let index = sitters.findIndex(baby => baby._id === action.payload.id);
      
      let newRatings = [...sitters[index].ratings];
      newRatings.push(action.payload.rating);
      sitters[index].ratings = newRatings;
      
      return state;

    case UsersActions.ADD_BABY: // action.payload is baby: Baby
    // How to add an object to an array of objects without modifying the existing array?
      return tassign(state, {babies: [...state.babies, action.payload]});

    // return {...state, babies:[...state.babies, action.payload] };

    // state.babies.push(action.payload);
    // return state;

    case UsersActions.SET_TYPE: // action.payload is isBaby: boolean

    // state.isBaby = action.payload;
    // return state;

    // return Object.assign({}, state, {isBaby: action.payload, foo: 1});
    return tassign(state, { isBaby: action.payload});
 
    default:
     return state;
 }
}
