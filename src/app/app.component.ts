import { Component } from '@angular/core';
import { EntranceComponent } from './entrance/entrance.component'
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { GetValuesService } from './get-values.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
