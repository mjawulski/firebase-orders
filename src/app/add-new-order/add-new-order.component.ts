import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";

@Component({
  selector: "app-add-new-order",
  templateUrl: "./add-new-order.component.html",
  styleUrls: ["./add-new-order.component.css"]
})
export class AddNewOrderComponent implements OnInit {
  private ordersCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.ordersCollection = this.afs.collection<any>("orders");
  }

  add(name) {
    this.ordersCollection.add({ name: name.value, status: "new" });
    name.value = null;
  }
}
