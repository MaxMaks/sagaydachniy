import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { GetValuesService } from '../get-values.service'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
	
  
  constructor(public af: AngularFire, public qwe:GetValuesService) {

 }

temp;
temp1;



  addConnection(name,id){
  
  let doWeAdd = true;
  this.temp1 = this.af.database.list(`/roles/`+this.qwe.currentSnapshotKey+`/students/`,{ preserveSnapshot: true})
  .subscribe(snapshots=>{
		        	snapshots.forEach(snapshot => {
                if (snapshot.val().Id == id) {
                	doWeAdd = false;
                  this.qwe.currentSnapshotKey = snapshot.key;
                }
		        		});
		       });
  if (doWeAdd) {
  	this.addition(name,id);
  }


  		
  }


  addition(name,id){
  	this.temp = this.af.database.list(`/roles/`+this.qwe.currentSnapshotKey+`/students/`).push({
  			Id:id,
  			name:name
  		});


  		let tempId;
  		this.af.database.list('/roles', { preserveSnapshot: true})
		    	.subscribe(snapshots=>{
		        	snapshots.forEach(snapshot => {
                if (snapshot.val().Id == id) {
                  tempId = snapshot.key;
                }
		        });
			})

  		this.temp = this.af.database.list(`/roles/`).update(tempId,{
  			teacher: this.qwe.name.uid
  		});	

  }


  
  RemoveConnection(name,id){
  		let tempId;
  		this.af.database.list('/roles', { preserveSnapshot: true})
		    	.subscribe(snapshots=>{
		        	snapshots.forEach(snapshot => {
                if (snapshot.val().Id == id) {
                  tempId = snapshot.key;
                }
		        });
			})


		   let tempId2;
		   this.af.database.list(`/roles/`+this.qwe.currentSnapshotKey+`/students/`, { preserveSnapshot: true})
		    	.subscribe(snapshots=>{
		        	snapshots.forEach(snapshot => {
		        		if (snapshot.val().Id == id) {
		        			tempId2 = snapshot.key;	
		        		}
		        });
			})

			this.temp = this.af.database.list(`/roles/`).update(tempId,{
  			teacher: 'none'
  		});

			this.temp = this.af.database.list(`/roles/`+this.qwe.currentSnapshotKey+`/students/`).update(tempId2,{
				Id:null,
				name:null
			})

  }

  ngOnInit() {
  }

}
