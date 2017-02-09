import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css'],
    providers : [CategoryService]
})
export class CategoryListComponent implements OnInit {
    private categoryList : any;
    constructor(private categoryService : CategoryService) { }

  ngOnInit() {
      this.categoryService.getCategoryList().subscribe((data : any) => {
          this.categoryList = data['data'];
      })
  }

}
