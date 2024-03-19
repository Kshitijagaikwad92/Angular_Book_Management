import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
constructor(private bookService:BookService)
{
}
books:any[]=[]
ngOnInit()
{
  this.bookService.getBooks().subscribe((data:any)=>{this.books=data})
}
deleteBook(bookId:any)
{
  this.bookService.DeleteBook(bookId).subscribe((res)=>{this.books=this.books.filter(items=>items.id!==bookId);
  })
}
}