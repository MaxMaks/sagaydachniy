import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GetValuesService {


  items: FirebaseListObservable<any>;
  teachers: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;
	chosens: FirebaseListObservable<any>;
	leftovers: FirebaseListObservable<any>;
  name: any;
  currentname: string;
  profileUrl:string;
  currentRole;
  currentSnapshotKey;
  

  constructor(public af: AngularFire) {
  	  	this.items = this.af.database.list('roles/');


  	  	this.leftovers = this.af.database.list(`/roles/`, {
	    		query: {
		        orderByChild: 'teacher',
		        equalTo: 'none'
	    		}
				});


  	  	this.teachers = this.af.database.list(`/roles/`, {
	    		query: {
		        orderByChild: 'Role',
		        equalTo: "teacher"
	    		}
				});
				this.students = this.af.database.list(`/roles/`, {
	    		query: {
		        orderByChild: 'Role',
		        equalTo: "student"
	    		}
				});
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    this.currentname = this.name.google.displayName;
    this.profileUrl = this.name.google.photoURL;
  }

  logout(){
  	this.af.auth.logout();
  	location.reload();
  }

}
