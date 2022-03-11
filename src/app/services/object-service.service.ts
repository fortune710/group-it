import { Injectable } from '@angular/core';
import { Firestore, getDoc, collectionData, addDoc, collection, doc, updateDoc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Object } from '../interfaces/Object'
@Injectable({
  providedIn: 'root'
})
export class ObjectServiceService {

  getDocuments(collectionName: string){
    const reference = collection(this.firestore, `${collectionName}`)
    return collectionData(reference, {idField:'string'})
  }

  getDocument(collectionName: string, id: string){
    const reference = doc(this.firestore, `${collectionName}/${id}`)
    return getDoc(reference)
  }

  addDocument(collectionName: string, doc:Object){
    const reference = collection(this.firestore, `${collectionName}`)
    return addDoc(reference, doc)
  }

  deleteDocument(collectionName: string, id:string){
    const reference = doc(this.firestore, `${collectionName}/${id}`)
    return deleteDoc(reference)
  }

  constructor(private firestore: Firestore) { }
}
