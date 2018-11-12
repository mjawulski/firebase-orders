import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-add-new-order-secure',
  templateUrl: './add-new-order-secure.component.html',
  styleUrls: ['./add-new-order-secure.component.css']
})
export class AddNewOrderSecureComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {}
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
