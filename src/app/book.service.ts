import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient : HttpClient,private router:Router) { }  //create HttpClientServiceModule
  //create URL
  SERVER_URL = "http://localhost:8080/api/"
  //create methods
  getBooks()
  {
    return this.httpClient.get(this.SERVER_URL+'books')        //return entire books
  }
  DeleteBook(n:any)
  {
    return this.httpClient.delete(`${this.SERVER_URL+'books'}/${n}`)
  }
  CreateBook(book:{id:number,name:string,price:number})
  {
    this.httpClient.post(`${this.SERVER_URL+'books'}`,book).subscribe((res:any)=>this.router.navigateByUrl('/book-list'))
  }
  EditBook(bid:any)
  {
    return this.httpClient.get(`${this.SERVER_URL+'books'}/${bid}`
  )}
  UpdateBook(book:{id:number,name:string,price:number})
  {
    return this.httpClient.put(`${this.SERVER_URL+'books'}/
    ${book.id}`,book).subscribe((res:any)=>
    {
      this.router.navigateByUrl('/book-list')
    })
  }
}
