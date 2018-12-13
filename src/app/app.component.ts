import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  employee: Observable<any[]>;
  // user: Observable<firebase.User>;
  name: string;
  department: string;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {}

  ngOnInit() {
    this.afAuth.auth.signInAnonymously();
    // this.user = this.afAuth.authState;
    this.db.collection('employee').valueChanges().subscribe((data:any) => {
      this.name = data[0].name;
      this.department = data[0].department;
    });
    
  }
}
