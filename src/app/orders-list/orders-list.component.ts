import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  private ordersCollection: AngularFirestoreCollection<any>;

  orders: Observable<any[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.ordersCollection = this.afs.collection('orders');
    this.orders = this.ordersCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  setStatus(order: any, status) {
    this.ordersCollection.doc(order.id).update({ status: status });
  }
}
