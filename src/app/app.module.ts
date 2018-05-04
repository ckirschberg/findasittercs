import { FilterBabies } from './babies.filter';
import { UsersService } from './users.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { rootReducer } from './store/store'; // Added this to get the root reducer

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';

import {MatInputModule} from '@angular/material/input';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { UsersActions } from './users.actions';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';
import {MatButtonModule} from '@angular/material/button';

import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createLogger } from "redux-logger";
import { UsersEpic } from './users.epic';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent,
    UsersListComponent,
    UserComponent,
    RatingComponent,
    FilterBabies
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,MatButtonModule,
    NgReduxModule,   NgReduxRouterModule.forRoot()
  ],
  providers: [AuthGuard, AuthService, DataService, UsersActions, 
    UsersService, UsersEpic],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter, private usersEpic: UsersEpic) { 
      
      const rootEpic = combineEpics(
        // Each epic is referenced here.
        this.usersEpic.getUsers, //this.usersEpic.createBaby
      );

        // Middleware
           // http://redux.js.org/docs/advanced/Middleware.html
           // https://github.com/angular-redux/store/blob/master/articles/epics.md
           // const epicMiddleware = createEpicMiddleware(rootEpic);
           const middleware = [
             createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
           ];
           
           this.ngRedux.configureStore(
             rootReducer,
             {}, middleware,[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
      // this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
      // ngReduxRouter.initialize(/* args */);  
  }
 }
 
