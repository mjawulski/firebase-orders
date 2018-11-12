import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: Observable<any>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.orders = this.afs.collection('orders').valueChanges();
  }
}
