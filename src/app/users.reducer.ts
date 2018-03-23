import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {isBaby: undefined, babies: [ // Just for testing
  {
    firstname: 'Oliver', 
    postalCode: '2920', 
    picture: 'no picture yet', 
    age: 8,
    gender: "Male"
  },
  {
    firstname: 'Carla', 
    postalCode: '1324', 
    picture: 'no picture yet', 
    age: 24,
    gender: "Female"
  },
]}

export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
    case UsersActions.ADD_BABY: // action.payload is baby: Baby
    // How to add an object to an array of objects without modifying the existing array?

    case UsersActions.SET_TYPE: // action.payload is isBaby: boolean

    // state.isBaby = action.payload;
    // return state;

     return tassign(state, { isBaby: action.payload });
 
    default:
     return state;
 }
}
