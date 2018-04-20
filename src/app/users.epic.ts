import { UsersService } from './users.service';
import { UsersActions } from "./users.actions";
import { ActionsObservable } from "redux-observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';

@Injectable()
export class UsersEpic {

  constructor(private usersService: UsersService) {}

  // This is an epic function!!! Must be registered in app.module.
getUsers = (action$: ActionsObservable<any>) => {
  return action$.ofType(UsersActions.GET_USERS) // Listen for this action
    .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
        return this.usersService.getUsers()
          .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
            type: UsersActions.GET_USERS_SUCCESS,
            payload: result.filter(baby => baby.customerId === '3')
          }))
          .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
            type: UsersActions.GET_USERS_FAILURE,
            payload: error
        }));
  });
}
createBaby = (action$: ActionsObservable<any>) => {
  return action$.ofType(**change to something else**) // Listen for this action
    .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
        return this.usersService.getUsers() // createUser
          .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
            type: UsersActions**Success at creating new user
            payload: result.filter(baby => baby.customerId === '3')
          }))
          .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
            type: UsersActions,
            payload: error
        }));
  });
}

}