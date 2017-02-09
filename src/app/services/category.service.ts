import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  getCategoryList(){

      var url = 'https://restful-node-mongo.herokuapp.com/category';
      return this.http.get(url)
          .map((res: Response) => res.json());
  }

  getCategoryDetail(id:string){
      var url = 'https://restful-node-mongo.herokuapp.com/category/'+id;
      return this.http.get(url)
          .map((res: Response) => res.json());
  }
}
