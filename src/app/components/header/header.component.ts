import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text='';
  @Output() onAddTodo=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    if (!this.text)
    {
      alert("Please write a todo");
    }
    this.onAddTodo.emit(this.text);
    this.text=''; 
 }

}
