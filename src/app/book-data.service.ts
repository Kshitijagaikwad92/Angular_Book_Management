import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class BookDataService implements InMemoryDbService{
  createDb()
  {
    let books=[
      {id:1,name:'Angular for Begineer',price:200},
      {id:2,name:'Java for Begineer',price:500},
      {id:3,name:'ReactJS for Begineer',price:600},
    ]
    //prints data into json format
    return{books}
  }
  constructor() { }
}
