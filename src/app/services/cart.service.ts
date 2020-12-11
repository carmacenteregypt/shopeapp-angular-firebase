import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from '../interfaces/good.interface';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as:AuthService) { 

  }
  addcart(data:Good){
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }
  getCart(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }
  delete(id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }
  save(id ,amount){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
      amount
    })
  }
}
