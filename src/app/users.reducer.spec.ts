var deepFreeze = require('deep-freeze');
import { usersReducer } from './users.reducer';
import * as types from './users.actions';

describe('users reducer', () => {
 
 it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({isBaby: undefined});
 });

 it('Toggle isBaby or sitter', () => {
   let state = {isBaby: undefined};
   deepFreeze(state);
   expect( usersReducer(state, { 
     type: types.UsersActions.SET_TYPE, 
     payload: true 
    })).toEqual({isBaby: true});
 });

});
