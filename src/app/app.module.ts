import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntranceComponent } from './entrance/entrance.component';
import { AngularFireModule } from 'angularfire2';
import { GetValuesService } from './get-values.service';
import { AccountsComponent } from './accounts/accounts.component';
import { QuizComponent } from './quiz/quiz.component';


export const firebaseConfig = {
    apiKey: "AIzaSyBDhfKi9Eeo5JN5m9PQTHlooi53ENujFIY",
    authDomain: "sagaydasha.firebaseapp.com",
    databaseURL: "https://sagaydasha.firebaseio.com",
    projectId: "sagaydasha",
    storageBucket: "sagaydasha.appspot.com",
    messagingSenderId: "1042222862816"
};


@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    AccountsComponent,
    QuizComponent,
    QweqweqwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'students',
        component:AccountsComponent
      },
      {
        path:'quiz',
        component:QuizComponent,
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [GetValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
