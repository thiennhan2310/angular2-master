import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css'],
    providers: [CategoryService]
})
export class CategoryDetailComponent implements OnInit {
    private category: any;
    private sub: any;
    constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.sub= this.route.params.subscribe(params => {
            let categoryId = params['id']; // (+) converts string 'id' to a number
            this.categoryService.getCategoryDetail(categoryId).subscribe((data: any) => {
                this.category = data['data'];
            })
        });
    }

}
