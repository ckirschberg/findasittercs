import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';
import { Baby } from './entities/baby';

@Injectable()
export class UsersActions {
 
  constructor (
   private ngRedux: NgRedux<IAppState>) {}
   
   static SET_TYPE: string = 'SET_TYPE';
   static ADD_BABY: string = 'ADD_BABY';
   static ADD_RATING: string = 'ADD_RATING';
   static GET_USERS: string = 'GET_USERS';
   static GET_USERS_SUCCESS: string = 'GET_USERS_SUCCESS';
   static GET_USERS_FAILURE: string = 'GET_USERS_FAILURE';

   getUsers() {
     this.ngRedux.dispatch({
       type: UsersActions.GET_USERS
     });
   }
   
    addRating(id: string, rating: number) {
      this.ngRedux.dispatch({
        type: UsersActions.ADD_RATING,
        payload: { rating, id }
      });
    }

   setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
       type: UsersActions.SET_TYPE,
       payload: isBaby
      //  payload: { isBaby, something: 1, } // passing multiple parameters
     });
   }

   addBaby(baby: Baby) : void {
     this.ngRedux.dispatch({
       type: UsersActions.ADD_BABY,
       payload: baby
       //Example of passing multiple parameters to reducer by passing an object
       //payload: {baby, sitterName}
     })
   }
}
