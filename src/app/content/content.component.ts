import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../services/get-data.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  data: Response;
 constructor(
   private getDataService: GetDataService
 ) {
 }

 ngOnInit() {
   this.getDataService
     .getData()
     .subscribe((resp: Response) => {
       const serverData = resp;
       this.data = serverData;
     })
 }
}
