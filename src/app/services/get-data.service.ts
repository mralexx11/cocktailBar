import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink');
  }
}
