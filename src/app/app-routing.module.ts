import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryDetailComponent} from "./component/category-detail/category-detail.component";
import {CategoryListComponent} from "./component/category-list/category-list.component";

const routes: Routes = [
    {'path': '' , 'component': CategoryListComponent},
    {'path': 'category/list' , 'component': CategoryListComponent},
    {'path': 'category-detail/:id' , 'component': CategoryDetailComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class CategoryDetailRoutingModule { }
