import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from './../users.reducer';
import { Baby } from '../entities/baby';

export class UsersState {
 isBaby: boolean;
 babies: Baby[];
}
export class IAppState {
 users?: UsersState;
}
export const rootReducer = combineReducers<IAppState>({
 users: usersReducer,

 router: routerReducer
});
