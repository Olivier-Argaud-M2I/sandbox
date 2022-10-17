import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { ObjectTest } from '../models/object-test';

@Injectable({
  providedIn: 'root'
})
export class ObjectListService {

  objects:ObjectTest[] = [
    {name:"name1",registrationNumber:"123456",hobby:"hobby1",hobbies:[]},
    {name:"name2",registrationNumber:"123789",hobby:"hobby2",hobbies:[]},
    {name:"name3",registrationNumber:"456789",hobby:"hobby3",hobbies:[]},
    {name:"name4",registrationNumber:"123789",hobby:"hobby4",hobbies:[]},
    {name:"name5",registrationNumber:"123456",hobby:"hobby5",hobbies:[]},
    {name:"name6",registrationNumber:"456789",hobby:"hobby6",hobbies:[]},
    {name:"name7",registrationNumber:"789456",hobby:"hobby7",hobbies:[]},
    {name:"name8",registrationNumber:"123456",hobby:"hobby8",hobbies:[]},
    {name:"name9",registrationNumber:"123789",hobby:"hobby9",hobbies:[]},
    {name:"name10",registrationNumber:"456789",hobby:"hobby10",hobbies:[]},
    {name:"name11",registrationNumber:"789123",hobby:"hobby11",hobbies:[]},
    {name:"name12",registrationNumber:"456789",hobby:"hobby12",hobbies:[]}
  ];

  constructor() { }


  getObjects():Observable<ObjectTest[]>{
    return of(this.objects);
  }

}
