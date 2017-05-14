import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { GetValuesService } from '../get-values.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  constructor(public af: AngularFire, public qwe:GetValuesService, public router:Router) {
  	this.loaded = false;
    this.af.auth.subscribe(auth => { 
	      if(auth) {
          this.status = false;
	        this.qwe.name = auth;
	        this.qwe.currentname = this.qwe.name.google.displayName;
	        this.qwe.profileUrl = this.qwe.name.google.photoURL;
	        this.firstTime = true;
	        this.checkVisit();
	        this.af.database.list('/roles', { preserveSnapshot: true})
		    	.subscribe(snapshots=>{
		    		this.loaded = true;
		        	snapshots.forEach(snapshot => {
                if (snapshot.val().Id == this.qwe.name.uid) {
                  this.qwe.currentSnapshotKey = snapshot.key;
                  qwe.chosens = this.af.database.list('/roles/'+this.qwe.currentSnapshotKey+'/students/');
                }
		          console.log(snapshot.key, snapshot.val());
		        });
	    	})
	      }
    });
  }

  changeStatus(){
    this.status = !this.status
  }

  firstTime:boolean;
  loaded:boolean;
  status:boolean;


  checkVisit(){
    this.qwe.items.forEach(item => {
    	item.forEach(item2 =>{
    		if (item2.Id == this.qwe.name.uid) {
				this.firstTime = false;
        //this.router.navigateByUrl('/quiz');
				this.qwe.currentRole = item2.Role;
				console.log(this.qwe.currentRole);
				console.log("not the first time");
    		}
    		else{
				console.log("first time");
    		}
    	})
	});
  }
	

  addRole(arg){
  	if (arg == 'teacher') {
	  	let temp = this.af.database.list('/roles').push({
	  		Id:this.qwe.name.uid,
	  		name:this.qwe.name.google.displayName,
	  		Role:"teacher"
  		});
  		this.firstTime = false;
  	}
  	else{
  		let temp = this.af.database.list('/roles').push({
	  		Id:this.qwe.name.uid,
	  		name:this.qwe.name.google.displayName,
	  		Role:"student",
        teacher:"none"
  		});
  		this.firstTime = false;
  	}
    this.router.navigateByUrl('quiz');

  }




  ngOnInit() {
      this.af.auth.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('quiz');

        }
      });
    }
  


}
