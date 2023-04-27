import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/_services/todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _toDoService: TodoServiceService) { }
  todayTodos: any[] = [];
  columnNames: any[] = [
    { name: "Id", visible: false },
    { name: "Name", visible: true },
    { name: "DueDate", visible: true, format: 'date' },
    { name: "Priority", visible: true },
  ]
  ngOnInit() {
    this._toDoService.getByFilter({
      startDate: '2023-04-27',
      EndDate: '2023-04-28'
    }).subscribe(x => {
      this.todayTodos = x as [];
      console.log(this.todayTodos)
    })
  }
}
