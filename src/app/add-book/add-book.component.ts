import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
bookAddForm!:FormGroup
constructor(private bookService:BookService)
{}

ngOnInit()
{
  this.bookAddForm=new FormGroup({
    id: new FormControl ('',[Validators.required]),
    name: new FormControl ('',[Validators.required]),
    price: new FormControl ('',[Validators.required])
  })
}
createNewBook()
{
  this.bookService.CreateBook(this.bookAddForm.value)
}
}
