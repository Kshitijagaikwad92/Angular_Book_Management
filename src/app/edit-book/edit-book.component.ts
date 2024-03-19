import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
constructor(private bookService:BookService,private route:ActivatedRoute)
{}
id !: number
book=''
bookEditForm !: FormGroup
ngOnInit()
{
  this.id=this.route.snapshot.params['id']
  this.bookEditForm=new FormGroup({
    id: new FormControl ('',[Validators.required]),
    name: new FormControl ('',[Validators.required]),
    price: new FormControl ('',[Validators.required])
  })
  this.bookService.EditBook(this.id).subscribe(x=>this.bookEditForm.patchValue(x))
}
EditBook()
{
  this.bookService.UpdateBook(this.bookEditForm.value)
}
}
