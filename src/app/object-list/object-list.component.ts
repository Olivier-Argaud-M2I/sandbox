import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, filter, flatMap, from, groupBy, map, mergeMap, Observable, of, reduce, tap, toArray, zip, zipAll } from 'rxjs';
import { ObjectTest } from '../models/object-test';
import { ObjectListService } from '../services/object-list.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {


  objects:ObjectTest[]=[];
  test:ObjectTest[]=[];

  // objects$!: Observable<ObjectTest[]>;
  objects$!: Observable<any>;

  constructor(private objectListService:ObjectListService) { }

  ngOnInit(): void {
    this.objectListService.getObjects().subscribe(
      response => this.objects = response
    );
    // this.objects.sort((a,b)=>a.registrationNumber.localeCompare(b.registrationNumber));
    

    this.objects$ = this.objectListService.getObjects()
      .pipe(
        // tap( o => console.log(o)),
        concatMap((result) => from(result)),
        // tap( o => console.log(o)),
        filter(obj => obj.name.length>0 && obj.hobby.length>0),
        // tap( o => console.log(o)),
        groupBy(
          p => p.registrationNumber,
          p => p
        ),
        tap( o => console.log(o)),
        mergeMap( group => zip(of(group.key),group.pipe(toArray()))),
        // tap( objects => console.log(objects)),
        map( group => this.mergeFonctionTest(group[1])),
        // tap( o => console.log(o)),
        toArray(),
        // tap( o => console.log(o)),
        map(objs => objs.sort((a,b)=>a.name.localeCompare(b.name)))
      );
      
    // this.objects$.pipe(tap(obj => console.log(obj)));

  }

  mergeFonctionTest(arg0: ObjectTest[]): ObjectTest {
    // let object: ObjectTest ={ name:"test",registrationNumber:"",hobby:"",hobbies:[]};
    let object: ObjectTest =arg0[0];
    arg0.forEach(o=>{
      object.hobbies.push(o.hobby);
    });
    return object;
  }
 

}
