import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/_services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _categoryService: CategoryServiceService) { }
  categories: any[] = [];
  columnNames: any[] = [
    { name: "Id", visible: false },
    { name: "Name", visible: true },
  ]
  ngOnInit(): void {
    this._categoryService.getAllCategories().subscribe(x =>
      this.categories = x as []
    );
  }

}
