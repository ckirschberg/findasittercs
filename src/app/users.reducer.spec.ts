var deepFreeze = require('deep-freeze');
import { usersReducer } from './users.reducer';
import * as types from './users.actions';

describe('users reducer', () => {
 
 it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({isBaby: undefined, babies: []});
 });

 it('Toggle isBaby or sitter', () => {
   let state = {isBaby: undefined, babies: []};
   deepFreeze(state);

   expect( usersReducer(state, { 
     type: types.UsersActions.SET_TYPE, 
     payload: true 
    })).toEqual({isBaby: true, babies: []});
 });

 it('Should add a new baby object to array of babies', () => {
  let state = {isBaby: undefined, babies: []};
  deepFreeze(state);

  let newBaby = { firstname: 'Roland', postalCode: '2400', picture: 'no picture yet', age: 8, gender: 'MALE' };

  expect( usersReducer(state, { 
    type: types.UsersActions.ADD_BABY, 
    payload: newBaby
   })).toEqual({isBaby: undefined, babies: [{ firstname: 'Roland', postalCode: '2400', picture: 'no picture yet', age: 8, gender: 'MALE' }]});
});


});
